import React from 'react';
import { useMemo } from 'react';
import UseMenu from '../Hooks/UseMenu';
import SectionTitle from '../Components/SectionTitle';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const ManageItem = () => {
    let [menu, loading, refetch] = UseMenu(); 
    console.log(menu);
    let [axiosSecure]= useAxiosSecure()

    let remove = (id)=>{

        axiosSecure.delete(`/menu/${id}`)
        .then(data =>{
            refetch()
            console.log(data);
        })

        

    }

    return (
        <div className='container mx-auto'>
            <SectionTitle subTitle={'Hurry Up'} title={'Manage All Items'}></SectionTitle>
            
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        menu.map((item, index) =>  <tr key={item._id}>
                            <th>
                               {index}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div>
                                    <div className="font-bold">{item.name}</div>
                                    
                                </div>
                            </td>
                            <td>{item.price}</td>
                            <th>
                                <button onClick={()=>remove(item._id)} className="btn btn-ghost"><FaEdit></FaEdit></button>
                            </th>
                            <th>
                                <button onClick={()=>remove(item._id)} className="btn btn-ghost"><FaTrashAlt></FaTrashAlt></button>
                            </th>
                        </tr>)
                       }

                    </tbody>
                    {/* foot */}


                </table>
            
        </div>
    );
};

export default ManageItem;