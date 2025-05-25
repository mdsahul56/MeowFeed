// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVr10OGqgx2BSajToWRB29Rh54WSokhK4",
  authDomain: "meowfeed-522c4.firebaseapp.com",
  projectId: "meowfeed-522c4",
  storageBucket: "meowfeed-522c4.firebasestorage.app",
  messagingSenderId: "119976526795",
  appId: "1:119976526795:web:5724c2f1256d9efbd6ac4e",
  measurementId: "G-VKV0YDP1TB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)