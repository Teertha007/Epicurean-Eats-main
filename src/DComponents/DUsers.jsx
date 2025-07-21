import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';

// const { isLoading, isError, data : cart= [], error, refetch } = useQuery({
//     queryKey: ['carts', user?.email],
//     queryFn: async()=>{
//         let res = await fetch(`http://localhost:3000/carts?email=${user?.email}`)
//         return res.json();
//     },
//   })

// return [cart, refetch ]
// };

const DUsers = () => {



    let { data: users = [], refetch } = useQuery(['users'], async () => {
        let res = await fetch('http://localhost:3000/users')

        return res.json();

    })

    let remove = ()=>{

    }

    let makeAdmin = person =>{
        fetch(`http://localhost:3000/users/admin/${person._id}`,{
            method: 'PATCH'
        })
        .then(res=> res.json())
        .then(data=>{
            refetch();
            console.log(data);
        })
    }


    return (
        <div>
            <h1>Total User {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {users.map((user,i)=><tr key={user._key}>
                            <th>{i+1}</th>
                            <th>{user.name}</th>
                            <td>{user.email}</td>
                            <td>{user.role =='admin'? 'admin'
                            :
                            <button onClick={()=>makeAdmin(user)} className="btn btn-ghost"><FaUserShield className='text-xl'></FaUserShield> </button>}</td>
                            <td> <button onClick={()=>remove(item._id)} className="btn btn-ghost"><FaTrashAlt className='text-xl'></FaTrashAlt></button></td>
                        </tr>)}
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DUsers;