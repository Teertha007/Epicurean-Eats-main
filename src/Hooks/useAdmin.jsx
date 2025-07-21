import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { userAuth } from "../Providers/UserProvider";

const useAdmin = () => {

    let {user, loading} = useContext(userAuth)
    console.log(loading);

    const { data : isAdmin, refetch, isLoading : isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            let res = await fetch(`https://epicurean-eats-server.vercel.app/users/isadmin?email=${user?.email}`)

            return res.json()
            
            
        },
        
        
      })

   
    
    return {isAdmin, isAdminLoading}
};

export default useAdmin;