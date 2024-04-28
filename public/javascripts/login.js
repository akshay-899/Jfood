const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

// Regular expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Function to check if inputs are not empty and email is in correct format
function checkInputs() {
  const usernameValue = usernameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // Enable the login button if all fields are filled and email is in the correct format, else disable it
  if (usernameValue !== '' && emailValue.match(emailRegex) && passwordValue !== '') {
    loginButton.disabled = false;
    loginButton.classList.remove('transparent');
    loginButton.classList.remove('light-red');
  } else {
    loginButton.disabled = true;
    loginButton.classList.add('transparent');
    loginButton.classList.add('light-red');
  }
}

usernameInput.addEventListener('keyup', checkInputs);
emailInput.addEventListener('keyup', checkInputs);
passwordInput.addEventListener('keyup', checkInputs);