import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../Firebase/Firebase.config';
export let userAuth = createContext(null)

const UserProvider = ({children}) => {

    let [user, setUser]= useState(null)
    let [loading, setLoading] = useState(true)

    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider(app);


    let createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        let unsubscribe = onAuthStateChanged(auth, user=>{
            console.log(user);
            setUser(user);
            setLoading(false);
           

            if(user){
                fetch(`https://epicurean-eats-server.vercel.app/jwt`,{
                method: 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(user)
            })
            .then(res=> res.json())
            .then(data =>{
                console.log(data);
                localStorage.setItem('WT', data.token)
               
            })
            }
            else{
                localStorage.removeItem('WT')
            }
        })

        return ()=>{
            unsubscribe();
        }
    },[])

    let signIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    let logOut = () =>{
        signOut(auth)
    }

    let update = (name , photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo,
        })
    }

    let googlePopUp = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }




    let userInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        update,
        googlePopUp
    }

    return (
        <userAuth.Provider value={userInfo}>
            {children}
        </userAuth.Provider>
    );
};

export default UserProvider;