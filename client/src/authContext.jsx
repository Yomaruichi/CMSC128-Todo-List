import { createContext, useContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    sendPasswordResetEmail, 
    sendEmailVerification,
    updateProfile,
    onAuthStateChanged,
 } from "firebase/auth";
import { auth } from "./firebase";

const AuthCtx = createContext;
export const useAuth = () => useContext(AuthCtx);

