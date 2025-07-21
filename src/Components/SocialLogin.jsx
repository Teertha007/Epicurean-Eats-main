import React from 'react';
import { useContext } from 'react';
import { userAuth } from '../Providers/UserProvider';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    let { googlePopUp } = useContext(userAuth)

    let location = useLocation();
    // console.log(location);

    let go = location.state?.from?.pathname || '/'

    let navigate = useNavigate()


    let googleSignIn = () => {
        googlePopUp()
            .then(res => {
                console.log(res.user.email);
                let info = {name: res.user.displayName, email: res.user.email}
                console.log(info);
                fetch(`http://localhost:3000/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(info)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
                navigate(go)
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div className='text-center my-4'>
            <button onClick={googleSignIn} className="btn btn-circle btn-outline">
                <FaGoogle></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;