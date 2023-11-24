// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0D3wZqwIcwT0I4UZDkdfcK9AiGdmTY8s",
  authDomain: "netflixgpt-85ae3.firebaseapp.com",
  projectId: "netflixgpt-85ae3",
  storageBucket: "netflixgpt-85ae3.appspot.com",
  messagingSenderId: "988227491374",
  appId: "1:988227491374:web:688a0eaa93ed165bfff1bf",
  measurementId: "G-LZMBY02J8V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
