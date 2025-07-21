import React from 'react';
import useCart from '../Hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyCart = () => {
    let [cart, refetch ] = useCart()
    refetch();
    console.log(cart);
    let total

    if(cart){
       total = cart.reduce((sum, item) => item.price + sum, 0)
    }
  

    let remove = id =>{
        fetch(`https://epicurean-eats-server.vercel.app/carts/${id}`,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            refetch();
            console.log(data);
        })
    }
    return (
        <div>
            <p>my cart</p>
            <p>total item {cart && cart.length}</p>
            <p>total price $ {cart && total}</p>
            <Link to={'/dashboard/payment'}><button className='btn btn-primary'>Pay Now</button></Link>

            <div className="overflow-x-auto w-full">
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        cart.map((item, index) =>  <tr key={item._id}>
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
                                <button onClick={()=>remove(item._id)} className="btn btn-ghost"><FaTrashAlt></FaTrashAlt></button>
                            </th>
                        </tr>)
                       }

                    </tbody>
                    {/* foot */}


                </table>
            </div>
        </div>
    );
};

export default MyCart;