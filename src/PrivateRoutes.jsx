import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userAuth } from './Providers/UserProvider';

const PrivateRoutes = ({children}) => {

    let {user, loading} = useContext(userAuth);
    let location = useLocation();

    if(loading){
        return <div>lllllllllllllllllllllllllllllll</div>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}}></Navigate> 
};

export default PrivateRoutes;