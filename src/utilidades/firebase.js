// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeehdeIzjhSPo2oBQswGaw4_67158iMNY",
    authDomain: "datos-fisioconectt.firebaseapp.com",
    projectId: "datos-fisioconectt",
    storageBucket: "datos-fisioconectt.appspot.com",
    messagingSenderId: "494275880961",
    appId: "1:494275880961:web:1890a9b0d386e5ac93f800"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);