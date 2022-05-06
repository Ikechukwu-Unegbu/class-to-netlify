import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";



const app =  initializeApp({
  apiKey: "AIzaSyAOn820rZBPOfymj6Ei3dIAwBGdQ5Z0INg",
  authDomain: "fir-auth-1cd80.firebaseapp.com",
  projectId: "fir-auth-1cd80",
  storageBucket: "fir-auth-1cd80.appspot.com",
  messagingSenderId: "16390304502",
  appId: "1:16390304502:web:d0454efd992e94d11f32d7"
});

// export const app = initializeApp(firebaseConfig);
export default app;
