
function validateForm() {
    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var terms = document.getElementById("terms").checked;

    var valid = true;

    // Clear errors
    document.querySelectorAll(".error").forEach(function(el) {
        el.innerHTML = "";
    });

    if (fname === "") {
        document.getElementById("fnameError").innerHTML = "First name is required";
        valid = false;
    }

    if (lname === "") {
        document.getElementById("lnameError").innerHTML = "Last name is required";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        valid = false;
    }

    if (password.length < 8) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters";
        valid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmError").innerHTML = "Passwords do not match";
        valid = false;
    }

    if (!terms) {
        document.getElementById("termsError").innerHTML = "You must agree to the terms & conditions";
        valid = false;
    }

    return valid;
}