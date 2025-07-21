import { useQueries, useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { userAuth } from "../Providers/UserProvider";

let UseMenu = ()=>{
    // let [menu , setMenu] = useState([]);
    // let [loading, setLoading] = useState(true)

    // useEffect(()=>{
    //     fetch('http://localhost:3000/menu')
    //     .then(res=> res.json())
    //     .then(data=>{
    //         setMenu(data)
    //         setLoading(false)
           
    //     })

      

    // },[])

   
    let {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey : ['menu'],
        // enabled: !loading,
        queryFn : async ()=>{
            let res = await fetch('https://epicurean-eats-server.vercel.app/menu')
            return res.json();
        }
    })

    return [menu, loading, refetch];
}

export default UseMenu ;