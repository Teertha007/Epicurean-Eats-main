import React from 'react';
import { useContext } from 'react';
import { userAuth } from '../Providers/UserProvider';
import { useQuery } from '@tanstack/react-query'

const useCart = () => {

    let {user} = useContext(userAuth);
    console.log(user);

    let token = localStorage.getItem('WT');


    const { isLoading, isError, data : cart= [], error, refetch } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async()=>{
            let res = await fetch(`https://epicurean-eats-server.vercel.app/carts?email=${user?.email}`,{
                headers : {
                    'authorization' : `bearer ${token}`
                }
            })
            return res.json();
        },
      })

    return [cart, refetch ]
};

export default useCart;