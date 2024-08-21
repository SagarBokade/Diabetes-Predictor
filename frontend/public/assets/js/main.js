// Import necessary Firebase methods
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from './firebase.js';

const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submit-btn');
const toggleLink = document.getElementById('toggle-link');
const authForm = document.getElementById('auth-form');

let isSignIn = true;

document.getElementById('toggle-auth').addEventListener('click', function (e) {
    e.preventDefault();
    toggleForm();
});

authForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (isSignIn) {
        // Sign In
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // Redirect to the main page
                window.location.href = "../html/index.html"; // Ensure this path is correct
            })
            .catch(error => {
                console.error("Error during sign-in:", error.message);
                alert("Error during sign-in: " + error.message);
            });
    } else {
        // Sign Up
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // Redirect to the main page
                window.location.href = "../html/index.html"; // Ensure this path is correct
            })
            .catch(error => {
                console.error("Error during sign-up:", error.message);
                alert("Error during sign-up: " + error.message);
            });
    }
});

function toggleForm() {
    if (isSignIn) {
        formTitle.textContent = "Sign Up";
        submitBtn.textContent = "Sign Up";
        toggleLink.innerHTML = 'Already have an account? <a href="#" id="toggle-auth">Sign In</a>';
    } else {
        formTitle.textContent = "Sign In";
        submitBtn.textContent = "Sign In";
        toggleLink.innerHTML = 'Don\'t have an account? <a href="#" id="toggle-auth">Sign Up</a>';
    }
    isSignIn = !isSignIn;
}

// Optional: Check if the user is already logged in
onAuthStateChanged(auth, user => {
    if (user) {
        console.log("User is logged in:", user.email);
    } else {
        console.log("No user is logged in");
    }
});
