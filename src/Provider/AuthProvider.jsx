import React from 'react';
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app)
console.log(auth);


const AuthProvider = () => {


    
    return (
        <div>
            hello
        </div>
    );
};

export default AuthProvider;