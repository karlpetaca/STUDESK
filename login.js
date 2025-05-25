document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');

    // Sample hardcoded credentials (for demo only)
    const validEmail = "olfustudent1@gmail.com";
    const validPassword = "12345678";

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form from refreshing the page

        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        const agreed = document.getElementById('agree').checked;

        if (!agreed) {
            alert("You must agree to the Terms and Privacy Policy.");
            return;
        }

        if (email === validEmail && password === validPassword) {
            // Store user information
            const userInfo = {
                name: "John Doe", // This would normally come from a database
                email: email,
                address: "123 Main St, City, Country",
                phone: "+63 912 345 6789"
            };
            
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            
            alert("Login successful!");
            window.location.href = "landing.html"; // Redirect to home or dashboard
        } else {
            alert("Invalid email or password.");
        }
    });
});

// Function to update the account link based on login state
function updateAccountLink() {
    const accountLink = document.querySelector('.icons a[href="login.html"]');
    if (!accountLink) return; // Exit if no account link found

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        // Change to user icon if logged in
        accountLink.innerHTML = '<span class="icon"><i class="fas fa-user"></i></span>';
        accountLink.href = 'account.html'; // Change link to account page
    } else {
        // Keep as "Signup / Login" text if not logged in
        accountLink.innerHTML = '<span class="icon">Signup / Login</span>';
        accountLink.href = 'login.html';
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', updateAccountLink);
