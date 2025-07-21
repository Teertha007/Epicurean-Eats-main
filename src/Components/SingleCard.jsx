import React from 'react';
import { useContext } from 'react';
import { userAuth } from '../Providers/UserProvider';
import useCart from '../Hooks/useCart';

const SingleCard = ({food }) => {

    let {user} = useContext(userAuth)
    let {_id, name , recipe, price, image} =food
    let [,refetch]= useCart()
    let addToCart = (food) =>{
        let cartItem = {itemId: _id, name, price, image, email: user.email}

        fetch('https://epicurean-eats-server.vercel.app/carts',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body : JSON.stringify(cartItem)
        })
        .then(res=>res.json())
        .then(data=>{
            refetch();
            console.log(data);
        })
    }


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>addToCart(food)} className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleCard;