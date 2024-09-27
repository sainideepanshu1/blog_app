// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3ffc3.firebaseapp.com",
  projectId: "mern-blog-3ffc3",
  storageBucket: "mern-blog-3ffc3.appspot.com",
  messagingSenderId: "707303301578",
  appId: "1:707303301578:web:4239c2883f95468932ef33",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
