import React from 'react';
import { useForm } from "react-hook-form";
import SectionTitle from '../Components/SectionTitle';
import useAxiosSecure from '../Hooks/useAxiosSecure';
const AddItem = () => {

    let [axiosSecure] = useAxiosSecure()
    let img_key = import.meta.env.VITE_IMG;
    let ImgURL = `https://api.imgbb.com/1/upload?expiration=600&key=${img_key}`
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
       
        let formData = new FormData();
        formData.append('image', data.image[0])

        fetch(ImgURL, {
            method: 'POST',
            body: formData
        })
        .then(res=> res.json())
        .then(img=>{
            let image = img.data.display_url

            data.image  = image
            data.price = parseFloat(data.price)

            axiosSecure.post('/menu', data)
            .then(data=>{
                console.log(data);
            })
            
            console.log(data);
        })

    } 




    return (
        <div className='container mx-auto'>
            <SectionTitle subTitle={"What's New"} title={'Add New Item'}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-300 w-[500px] p-20 space-y-5 mx-auto'>
                <input type="text" placeholder="Recipe Name" {...register("name", { required: true })} className='w-full' />
                <div className='flex justify-between gap-4 '>
                    <select {...register("Category", { required: true })} className='w-full'>
                        <option value="Salad">Salad</option>
                        <option value="Soup">Soup</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Desert">Desert</option>
                    </select>
                    <input type="number" placeholder="Price" {...register("price", { required: true })} className='w-full' />
                </div>
                {/* <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} /> */}
                <textarea className="textarea textarea-primary w-full" {...register("recipe", { required: true })} placeholder="Recipe Details"></textarea>
                <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                <input type="submit" className='btn' />
            </form>
        </div>
    );
};

export default AddItem;