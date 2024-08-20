const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submit-btn');
const toggleLink = document.getElementById('toggle-link');
const authForm = document.getElementById('auth-form');

let isSignIn = true;

document.getElementById('toggle-auth').addEventListener('click', function(e) {
    e.preventDefault();
    toggleForm();
});

authForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (isSignIn) {
        // Sign In
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                window.location.href = "index.html"; // Redirect to main page
            })
            .catch(error => {
                console.error("Error during sign-in:", error.message);
            });
    } else {
        // Sign Up
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                window.location.href = "index.html"; // Redirect to main page
            })
            .catch(error => {
                console.error("Error during sign-up:", error.message);
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
