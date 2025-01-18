import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyChMvZpiJ89jURmf8X7DzM-NzIqD2Sw1LE",
    authDomain: "website-2101b.firebaseapp.com",
    projectId: "website-2101b",
    storageBucket: "website-2101b.firebasestorage.app",
    messagingSenderId: "871261075399",
    appId: "1:871261075399:web:1eff89999ddaa026604be2",
    measurementId: "G-SP03RC8207"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("welcomeMessage").textContent = `Welcome, ${user.displayName}!`;
        document.getElementById("nav-buttons").style.display = "none";
        document.getElementById("logout-btn").style.display = "flex";
    }else{
        document.getElementById("logout-btn").style.display = "none";
        const currentPage = window.location.pathname;

    // Apply the redirect logic only for specific pages
    if (currentPage === '/adopt.html' && !user) {
        alert("You need to be logged in to access this page.");
        window.location.href = "log.html";
    }
    }
});
// Logout function using Firebase
function logout() {
    signOut(auth)
        .then(() => {
            alert("You have been logged out.");
            window.location.href = "index.html"; // Reload the page to update the UI
        })
        .catch((error) => {
            console.error("Error during logout:", error);
            alert("Logout failed. Please try again.");
        });
}

// Make logout function globally accessible
window.logout = logout;