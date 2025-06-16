import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCm2PR0psIsn0ab-nkX4-2HGHMCpYH6XDU",
  authDomain: "mie-commerce.firebaseapp.com",
  projectId: "mie-commerce",
  storageBucket: "mie-commerce.firebasestorage.app",
  messagingSenderId: "717768673247",
  appId: "1:717768673247:web:0018027c618fffa186e66a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth();
export function crearUsuario(email,password){

  return(new Promise((res,rej)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      res(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      rej(error)
    });
  }))
  
}

export function iniciarSesion(email,password){
  return(new Promise((res,rej)=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    res(user)
    })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const errores = errorCode + errorMessage
    rej(errores)
    });
  }))
  }