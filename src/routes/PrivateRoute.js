//import { getAuth } from "firebase/auth";
import { Navigate } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";


const Auth=()=>{
  const user=localStorage.getItem('user')
//  const authFromFirebase = getAuth();
//   const userFromFirebase = authFromFirebase.currentUser.uuid;
//  console.log(user )
 if(user){
   return true;
 } else {
   return false;
 }
}

export default function PrivateRoute({ children }) {
 // const auth = useAuth();
 const auth = Auth();
 return auth ? children : <Navigate to="/login" />;
}



