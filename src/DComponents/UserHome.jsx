import React from 'react';
import { useContext } from 'react';
import { userAuth } from '../Providers/UserProvider';

const UserHome = () => {
    let {user} = useContext(userAuth)
    return (
        <div>
        <h1>home of {user && user.displayName}</h1>
        </div>
    );
};

export default UserHome;