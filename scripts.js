// Login Form Validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email.";
    } else {
        document.getElementById('emailError').textContent = "";
    }

    if (password.length < 6) {
        document.getElementById('passwordError').textContent = "Password must be at least 6 characters.";
    } else {
        document.getElementById('passwordError').textContent = "";
    }
});

function validateEmail(email) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Registration Form Validation
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email.";
    } else {
        document.getElementById('emailError').textContent = "";
    }

    if (password.length < 6) {
        document.getElementById('passwordError').textContent = "Password must be at least 6 characters.";
    } else {
        document.getElementById('passwordError').textContent = "";
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = "Passwords do not match.";
    } else {
        document.getElementById('confirmPasswordError').textContent = "";
    }
});
