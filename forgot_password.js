document.addEventListener('DOMContentLoaded', function () {
  const forgotPasswordLink = document.getElementById('forgot-password-link');
  const resetPasswordForm = document.getElementById('reset-password-form');
  const cancelResetButton = document.getElementById('cancel-reset');

  // Show reset password form when link is clicked
  forgotPasswordLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior
      resetPasswordForm.classList.remove('hidden'); // Show reset form
  });

  // Hide reset password form when cancel button is clicked
  cancelResetButton.addEventListener('click', function () {
      resetPasswordForm.classList.add('hidden'); // Hide reset form
  });

  // Optionally, add functionality to send the reset link
  const sendResetLinkButton = document.getElementById('send-reset-link');
  sendResetLinkButton.addEventListener('click', function () {
      const email = document.getElementById('reset-email').value;
      // Here, you would typically send the email to your backend to handle the reset
      console.log(`Reset link sent to: ${email}`);
      alert('Reset link sent! Check your email.'); // Display confirmation
      resetPasswordForm.classList.add('hidden'); // Hide form after sending link
  });
});
