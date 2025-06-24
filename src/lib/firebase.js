// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDLrv_LRMahsiYAja0GrY83ym-EhCGlp48",
    authDomain: "bmis-aa88e.firebaseapp.com",
    projectId: "bmis-aa88e",
    storageBucket: "bmis-aa88e.firebasestorage.app",
    messagingSenderId: "510898786622",
    appId: "1:510898786622:web:b6393f0344d26cfe50dc6f",
    measurementId: "G-GTD4E2VXX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);