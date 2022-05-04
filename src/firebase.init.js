// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiitvPsbUxID24KKqHtpcW0M9VvSVk_Is",
    authDomain: "fruit-fest.firebaseapp.com",
    projectId: "fruit-fest",
    storageBucket: "fruit-fest.appspot.com",
    messagingSenderId: "975493162811",
    appId: "1:975493162811:web:ce196541198985489db91e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) 
export  default auth;