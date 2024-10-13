document.addEventListener('DOMContentLoaded', function () {
    const loginSection = document.getElementById('login-section');
    const signupSection = document.getElementById('signup-section');
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');

    // Show login section by default
    loginSection.style.display = 'block';
    signupSection.style.display = 'none'; // Hide signup by default

    // Show signup form when "Sign Up" link is clicked
    showSignup.addEventListener('click', function (event) {
        event.preventDefault();
        loginSection.style.display = 'none'; // Hide login section
        signupSection.style.display = 'block'; // Show signup section
    });

    // Show login form when "Login" link is clicked
    showLogin.addEventListener('click', function (event) {
        event.preventDefault();
        signupSection.style.display = 'none'; // Hide signup section
        loginSection.style.display = 'block'; // Show login section
    });

    // Handle login form submission
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get the form data
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Here you can handle the login logic, such as making an API call
        console.log('Logging in with:', username, password);

        // For demonstration, clear the fields after submission
        loginForm.reset();
    });

    // Handle signup form submission
    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get the form data
        const signupUsername = document.getElementById('signup-username').value;
        const signupEmail = document.getElementById('signup-email').value;
        const signupPassword = document.getElementById('signup-password').value;

        // Here you can handle the signup logic, such as making an API call
        console.log('Signing up with:', signupUsername, signupEmail, signupPassword);

        // For demonstration, clear the fields after submission
        signupForm.reset();
    });

    // Handle "Forgot Password?" link
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    forgotPasswordLink.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Password reset instructions will be sent to your email.');
    });
});
