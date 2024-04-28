function validateField(fieldId) {
    var field = document.getElementById(fieldId);
    var fieldValue = field.value.trim();
    if (fieldValue === "") {
      field.value = ""; 
      field.focus(); 
    }
    validateForm();
  }

  function validateForm() {
    var username = document.getElementById("usernameInput").value.trim();
    var email = document.getElementById("emailInput").value.trim();
    var password = document.getElementById("passwordInput").value.trim();
    var phoneNumber = document.getElementById("phoneNumberInput").value.trim();

    var registerButton = document.getElementById("registerButton");

    if (username !== "" && email !== "" && password !== "" && phoneNumber !== "" && phoneNumber.length === 10) {
      registerButton.disabled = false; 
      registerButton.style.opacity = "1";
    } else {
      registerButton.disabled = true;
      registerButton.style.opacity = "0.5";
    }
  }