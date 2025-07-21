import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useEffect } from 'react';
import { useContext } from 'react';
import { userAuth } from '../Providers/UserProvider';

const CheckOut = ({price}) => {

    let {user} = useContext(userAuth);
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    let [axiosSecure] = useAxiosSecure()
    let [err, setErr] = useState(null)

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent', {price})
        .then(res=>setClientSecret(res.data.clientSecret))
    },[])

    // console.log(price);

    const handleSubmit = async (event) => {
        setErr(null)
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setErr(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        const {paymentIntent, err} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user?.name || 'Unknown',
                  email: user?.email || 'Unknown',
                },
              },
            },
          );
          if(err){
            console.log(err);
          }
          console.log(paymentIntent);


    };








return (
    <div className='container mx-auto'>

        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-primary btn-sm m-5' type="submit" disabled={!stripe}>
                Pay
            </button>
            {err && <p className='text-warning'>{err}</p>}
        </form>


    </div>
);
}


export default CheckOut;