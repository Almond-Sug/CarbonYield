// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBfguflBzUyuzaecwag0eyDJR78W0PAlF8",
  authDomain: "carbonyield-87d26.firebaseapp.com",
  projectId: "carbonyield-87d26",
  storageBucket: "carbonyield-87d26.firebasestorage.app",
  messagingSenderId: "312361242827",
  appId: "1:312361242827:web:8312fd35a31f5acb2e4b4e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };

