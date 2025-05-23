// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4c161.firebaseapp.com",
  projectId: "mern-estate-4c161",
  storageBucket: "mern-estate-4c161.firebasestorage.app",
  messagingSenderId: "298785541713",
  appId: "1:298785541713:web:677774906717d63dc03270"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);