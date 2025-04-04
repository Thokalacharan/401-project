let users = {};

function showSignup() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}

function showLogin() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (users[email] && users[email] === password) {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Account not found. Please sign up first.");
    }
}

function handleSignup(event) {
    event.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    users[email] = password;
    alert("Signup completed successfully! Now login with your credentials.");
    showLogin();
}

async function searchPhone() {
    const searchQuery = document.getElementById("search-input").value.trim();
    if (!searchQuery) {
        alert("Please enter a phone name to search.");
        return;
    }

    try {
        const response = await fetch("index.json"); // Fetch JSON data
        const mobiles = await response.json();

        const phone = mobiles.find(m => m["Model Name"].toLowerCase() === searchQuery.toLowerCase());

        if (phone) {
            document.getElementById("search-result").innerHTML = `
                <strong>📱 Model:</strong> ${phone["Model Name"]} <br>
                <strong>🏢 Brand:</strong> ${phone["Company Name"]} <br>
                <strong>💰 Price:</strong> ${phone["Launched Price (India)"] || "N/A"} <br>
                <strong>🔋 Battery:</strong> ${phone["Battery Capacity"] || "N/A"} <br>
                <strong>💾 RAM:</strong> ${phone["RAM"] || "N/A"} <br>
                <strong>🗄 Storage:</strong> ${phone["Storage"] || "N/A"} <br>
                <strong>📷 Camera:</strong> ${phone["Front Camera"] || "N/A"} (Front) / ${phone["Back Camera"] || "N/A"} (Back) <br>
                <strong>⚡ Processor:</strong> ${phone["Processor"] || "N/A"} <br>
                <strong>📏 Screen Size:</strong> ${phone["Screen Size"] || "N/A"} <br>
                <strong>📆 Launched Year:</strong> ${phone["Launched Year"] || "N/A"}
            `;
        } else {
            document.getElementById("search-result").innerText = "❌ Mobile not found.";
        }
    } catch (error) {
        alert("Error fetching phone data.");
    }
}

function logout() {
    window.location.href = "index.html";
}
