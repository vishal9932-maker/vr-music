document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        // Visual feedback
        const btn = document.querySelector('.login-btn');
        const originalText = btn.textContent;
        btn.textContent = 'Verifying...';
        btn.style.opacity = '0.7';
        btn.style.pointerEvents = 'none';

        // Simulate a real check (allowing any email/password as "working condition")
        setTimeout(() => {
            // "Accept duplicate gmail" - overwriting or updating the same key is fine
            localStorage.setItem('userEmail', email);
            console.log(`Login successful for: ${email}`);

            btn.textContent = 'Success!';
            btn.style.background = '#1DB954';

            setTimeout(() => {
                window.location.href = 'redesign.html';
            }, 800);
        }, 1200);
    } else {
        alert('Please enter both Gmail/Email and Password');
    }
});

// Google Sign-In Simulation (Universal)
function openGoogleLogin() {
    const width = 500;
    const height = 600;
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);

    // Open the high-fidelity simulation page in a popup
    const popup = window.open('google-signin.html', 'GoogleSignIn',
        `width=${width},height=${height},top=${top},left=${left},scrollbars=no,resizable=no`);

    // Check if popup is closed or redirected
    const timer = setInterval(() => {
        if (popup && popup.closed) {
            clearInterval(timer);
            const loggedInEmail = localStorage.getItem('userEmail');
            if (loggedInEmail) {
                // Success! Redirect to app
                console.log("Logged in via Google Simulation:", loggedInEmail);
                window.location.href = 'redesign.html';
            }
        }
    }, 500);
}

// Ensure the popup function is globally accessible
window.openGoogleLogin = openGoogleLogin;
