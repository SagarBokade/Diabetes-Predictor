// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAuPN67icW0-q_E3ahKCcFOdOSXDyqoI6I",
    authDomain: "diabetes-predictor-eb42f.firebaseapp.com",
    projectId: "diabetes-predictor-eb42f",
    storageBucket: "diabetes-predictor-eb42f.appspot.com",
    messagingSenderId: "79892870307",
    appId: "1:79892870307:web:12b3eddc866bd04a6dfb16",
    measurementId: "G-X7J0N3CDV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged };

console.log("Firebase initialized:", app);
console.log("Auth initialized:", auth);
console.log("Firebase Configuration:", firebaseConfig);

