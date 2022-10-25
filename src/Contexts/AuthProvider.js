import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');

    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser, profile);
    }


    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOutUser = ()=>{
        return signOut(auth);
    } 

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        })
        return ()=>{
            unSubscribe();
        }

    },[])

    const authInfo = {user, createUser, loginUser, logOutUser, updateUserProfile};
    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;