import React, { useContext, useState, useEffect } from "react";
import { getAuth,
   createUserWithEmailAndPassword, 
   signInWithEmailAndPassword, 
   // onAuthStateChanged, 
   setPersistence,
   sendPasswordResetEmail,

   signOut } from "firebase/auth";
// import app from '../firebase';

const AuthContext = React.createContext();

export function useAuth(){
   return useContext(AuthContext);
}

export function AuthProvider({children}){
   const [currentUser, setCurrentUser] = useState();
   const [loading, setLoading] = useState(false);

   function signup(email, password){
      const auth = getAuth();
      return createUserWithEmailAndPassword(auth, email, password)
   }

   function login(email, password){
      const auth = getAuth();
      return signInWithEmailAndPassword(auth, email, password);
   }

   function resetPassword(email){
      const auth = getAuth();
      return sendPasswordResetEmail(auth,email);
    }

   function logout(){
      const auth = getAuth();
      return signOut(auth);
    }

   useEffect(()=>{
      const auth = getAuth();
      const unsubscriber= auth.onAuthStateChanged(user=>{
        if (user) {         
          setCurrentUser(user);
          setPersistence(auth, 'browserLocalPersistence');
           setLoading(false);
          // ...
        } else {
         
        };
      
      }) 
      return unsubscriber;
    },[]) 

   const value ={
      currentUser,
      signup, 
      login,
      resetPassword,
      logout,
      loading
   }

   return (
      <AuthContext.Provider value={value}>
         {children}
      </AuthContext.Provider>
   )
}