import React, { useContext } from 'react';
import { userAuth } from '../Providers/UserProvider';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../Components/SocialLogin';

const SignUp = () => {

    let {createUser, update , googlePopUp} = useContext(userAuth);
    let navigate = useNavigate();
    let submit = event =>{

        event.preventDefault();

        let name = event.target.name.value
        let photo = event.target.photo.value
        let email = event.target.email.value
        let password = event.target.password.value

        console.log(name, email, password);
        let info = {name,email}
        createUser(email, password)
        .then(user=>{
            update(name,photo)
            fetch(`http://localhost:3000/users`,{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(info)
            })
            .then(res => res.json())
            .then(data=>{
                console.log(data);
            })
            navigate('/')
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={submit} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="Your password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value={'Sign Up'} className='btn btn-primary'/>
                                </div>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;