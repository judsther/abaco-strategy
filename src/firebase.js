// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClxdnzJ7HrLjQk23Dat6c_14wJjTCBteA",
  authDomain: "abaco-media.firebaseapp.com",
  projectId: "abaco-media",
  storageBucket: "abaco-media.firebasestorage.app",
  messagingSenderId: "924048289487",
  appId: "1:924048289487:web:bf8da33c2c179e10b491ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
