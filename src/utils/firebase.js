// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeKZjhvZbhZ0mX7SzuhRubysXtzryMgYI",
  authDomain: "netflixgpt-a0d88.firebaseapp.com",
  projectId: "netflixgpt-a0d88",
  storageBucket: "netflixgpt-a0d88.firebasestorage.app",
  messagingSenderId: "239403484320",
  appId: "1:239403484320:web:368bb742a525b42183f5c5",
  measurementId: "G-GED649SZHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();