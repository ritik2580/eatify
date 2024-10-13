// signup.js

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
  
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
  
    signupForm.addEventListener('submit', (e) => {
      let isValid = true;
  
      // Username Validation
      if (username.value.trim() === '') {
        usernameError.style.display = 'block';
        isValid = false;
      } else {
        usernameError.style.display = 'none';
      }
  
      // Email Validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
        emailError.style.display = 'block';
        isValid = false;
      } else {
        emailError.style.display = 'none';
      }
  
      // Password Validation
      if (password.value.trim() === '') {
        passwordError.style.display = 'block';
        isValid = false;
      } else {
        passwordError.style.display = 'none';
      }
  
      // Confirm Password Validation
      if (password.value.trim() !== confirmPassword.value.trim() || confirmPassword.value.trim() === '') {
        confirmPasswordError.style.display = 'block';
        isValid = false;
      } else {
        confirmPasswordError.style.display = 'none';
      }
      document.addEventListener('DOMContentLoaded', function () {
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const signupButton = document.getElementById('signup-button');
    
        // Show button on input
        usernameInput.addEventListener('input', function () {
            if (usernameInput.value) {
                signupButton.style.opacity = 1; // Show button
                signupButton.style.transform = 'translateY(0)'; // Reset position
            } else {
                signupButton.style.opacity = 0; // Hide button
                signupButton.style.transform = 'translateY(-20px)'; // Move up
            }
        });
    
        passwordInput.addEventListener('input', function () {
            if (passwordInput.value) {
                signupButton.style.opacity = 1; // Show button
                signupButton.style.transform = 'translateY(0)'; // Reset position
            } else {
                signupButton.style.opacity = 0; // Hide button
                signupButton.style.transform = 'translateY(-20px)'; // Move up
            }
        });
    });
    
      if (!isValid) {
        e.preventDefault();
      }
    });
  });
  