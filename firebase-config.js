// --- firebase-config.js ---

// 1. Import Firebase from the CDN (Browser-ready links)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 2. Your Web App's Firebase Configuration (I added your keys here)
const firebaseConfig = {
  apiKey: "AIzaSyBIXy1hHTjde62hjbLw3nwxMNSCY7HFGns",
  authDomain: "tehillah-website-9dd14.firebaseapp.com",
  projectId: "tehillah-website-9dd14",
  storageBucket: "tehillah-website-9dd14.firebasestorage.app",
  messagingSenderId: "40546309853",
  appId: "1:40546309853:web:4222b7887f6b86ec2e6d34",
  measurementId: "G-MSERH232QZ"
};

// 3. Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// 4. Export functions so your HTML pages can use them
export { 
    app, 
    db, 
    auth, 
    collection, 
    addDoc, 
    getDocs, 
    deleteDoc, 
    doc, 
    query, 
    orderBy, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    onAuthStateChanged, 
    signOut, 
    onSnapshot 
};