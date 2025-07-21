import React from 'react';
import SectionTitle from '../Components/SectionTitle';
import CheckOut from './CheckOut';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../Hooks/useCart';
import { useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useEffect } from 'react';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);

const Payment = () => {

    let [cart] = useCart();
   
  
    let total = cart.reduce((sum, item )=> item.price + sum, 0  )
    // console.log(total);
    let price = parseFloat(total.toFixed(2));
    // console.log(price);

   
    return (
        <div>
            <SectionTitle title={'Payment'}></SectionTitle>
            
            <Elements stripe={stripePromise}>
                <CheckOut price={price}></CheckOut>
            </Elements>

        </div>
    );
};

export default Payment;