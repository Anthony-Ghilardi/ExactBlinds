// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "exact-blinds.firebaseapp.com",
  projectId: "exact-blinds",
  storageBucket: "exact-blinds.firebasestorage.app",
  messagingSenderId: "85313333347",
  appId: "1:85313333347:web:f62c256b40ce64bc7a3056",
  measurementId: "G-FT6184DE78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);