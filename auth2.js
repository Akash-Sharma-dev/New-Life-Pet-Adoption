import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);

// Sign Up
const signUpForm = document.getElementById("signupForm");
if (signUpForm) {
    signUpForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const gender = document.getElementById("gender").value;
        const dob = document.getElementById("dob").value;  // Get the DOB value

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user, { displayName: name });
            // Store DOB in Firestore instead of datingPreference
            await setDoc(doc(db, "users", user.uid), { name, email, age, gender, dob });

            alert("Sign-up successful!");
            window.location.href = "log.html";
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login successful!");
            window.location.href = "index.html";
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    });
}