function validateLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation: change these credentials as necessary
        if (username === "student" && password === "password123" || username === "Amansingh" && password === "aman123") {
            // If valid credentials, redirect to backend page
            window.location.href = "index.html";
        } else {
            // If invalid, alert the user
            alert("Invalid username or password.");
        }

        // Return false to prevent the form from submitting normally
        return false;
    }
