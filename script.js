document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        return;
    }

    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        return;
    }

    alert("Your subscription was successful!");
    document.getElementById("subscriptionForm").reset();
});
