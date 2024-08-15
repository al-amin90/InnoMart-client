import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import React, { createContext } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const GoogleProvider = new GoogleAuthProvider()

const logInWithGoogle = () => {
    return signInWithPopup(auth, GoogleProvider)
}

const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
} 

const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

// ALL auth infos
const authInfo = {
    logInWithGoogle,
    createUser,
    loginUser

}

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;