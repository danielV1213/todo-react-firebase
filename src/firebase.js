// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// DON'T FORGET TO SAVE THESE CREDENTIALS IN A .env FILE IF YOU WANT TO HOST THE APP
const firebaseConfig = {
    apiKey: "AIzaSyCi1zSRNTxngBzzsQUYiX0_6HcHnTky5vc",
    authDomain: "todo-app-1d8ea.firebaseapp.com",
    projectId: "todo-app-1d8ea",
    storageBucket: "todo-app-1d8ea.appspot.com",
    messagingSenderId: "368320849358",
    appId: "1:368320849358:web:000ad1b974b95424eeb79f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 