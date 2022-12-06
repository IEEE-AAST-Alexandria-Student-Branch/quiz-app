// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAlF5Y0qr-lk9feuGm5UiiGZ3djZ9LJFU",
  authDomain: "ieee-quiz-app.firebaseapp.com",
  projectId: "ieee-quiz-app",
  storageBucket: "ieee-quiz-app.appspot.com",
  messagingSenderId: "843503704545",
  appId: "1:843503704545:web:c239b88ef74be50cd2daa0",
  measurementId: "G-14RWH87F8R"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 