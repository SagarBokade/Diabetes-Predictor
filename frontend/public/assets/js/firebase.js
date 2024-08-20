import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementById('auth-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const formTitle = document.getElementById('form-title').textContent;

    if (formTitle === "Sign In") {
        // Sign In
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                window.location.href = "index.html"; // Redirect to main page
            })
            .catch(error => {
                console.error("Error during sign-in:", error.message);
                alert("Error during sign-in: " + error.message);
            });
    } else if (formTitle === "Sign Up") {
        // Sign Up
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                window.location.href = "index.html"; // Redirect to main page
            })
            .catch(error => {
                console.error("Error during sign-up:", error.message);
                alert("Error during sign-up: " + error.message);
            });
    }
});

// Check if user is logged in (optional)
auth.onAuthStateChanged(user => {
    if (user) {
        console.log("User is logged in:", user.email);
    } else {
        console.log("No user is logged in");
    }
});
