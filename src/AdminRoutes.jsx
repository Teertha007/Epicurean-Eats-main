import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userAuth } from './Providers/UserProvider';
import useAdmin from './Hooks/useAdmin';

const AdminRoutes = ({children}) => {

    let {loading, user} = useContext(userAuth);
    let {isAdmin, isAdminLoading} = useAdmin();
    let state = isAdmin?.admin

    if(loading || isAdminLoading){
        return <h1>lllllllllllllll</h1>
    }

    if(user && state){
        return children
    }

    return <Navigate to={'/'}></Navigate>
};

export default AdminRoutes;