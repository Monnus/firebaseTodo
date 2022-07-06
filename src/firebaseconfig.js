// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app= initializeApp({
  apiKey:"AIzaSyCfpy4nWZ4AT1DId-RbEgDkNlc-0761_fQ",
  authDomain:"auth-development-cc1c2.firebaseapp.com",
  projectId:"auth-development-cc1c2",
  storageBucket:"auth-development-cc1c2.appspot.com",
  messagingSenderId:926218396363,
  appId:"926218396363:web:8e70fa5ae386dc3296714e",
  measurementId: "G-MDEK9MCKK0"
});

// Initialize Firebase

export const fire=app;
export default fire