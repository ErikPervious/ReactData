// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs-bdaiAGt96E-GKbU57--gBx4pRkicVY",
  authDomain: "banco-a3470.firebaseapp.com",
  projectId: "banco-a3470",
  storageBucket: "banco-a3470.appspot.com",
  messagingSenderId: "401097258911",
  appId: "1:401097258911:web:b994968dc6649b54d2afaa"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);