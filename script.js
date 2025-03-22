document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    // Reset error messages
    emailError.textContent = "";
    passwordError.textContent = "";

    // Email validation (must be in correct format)
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        return;
    }

    // Password validation (at least 6 characters)
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        return;
    }

    // Clear the form if validation passes
    alert("Subscription Successful!");
    document.getElementById("subscriptionForm").reset();
});
