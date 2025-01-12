document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form data
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // For the purpose of this demo, we use a simple check for username/password
    if (username && password) {
        alert("Welcome, " + username + "!");
        // Redirect to the main page or dashboard (change the URL accordingly)
        window.location.href = "welcome.html"; // Example of redirection
    } else {
        alert("Please enter both a username and password.");
    }
});
