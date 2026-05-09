// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔑 PASTE YOUR FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyArPkzW5MtYGqsfBPyargJk0QXt_gAoW4A",
  authDomain: "hellhost-d12d4.firebaseapp.com",
  projectId: "hellhost-d12d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Elements
const googleBtn = document.getElementById("googleBtn");
const githubBtn = document.getElementById("githubBtn");
const logoutBtn = document.getElementById("logoutBtn");
const userText = document.getElementById("user");

// Google Login
googleBtn.addEventListener("click", () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log("Google login success");
    })
    .catch((error) => {
      alert(error.message);
    });
});

// GitHub Login
githubBtn.addEventListener("click", () => {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      console.log("GitHub login success");
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Logout
logoutBtn.addEventListener("click", () => {
  signOut(auth);
});

// Detect user
onAuthStateChanged(auth, (user) => {
  if (user) {
    userText.innerText = "Welcome " + user.displayName;
  } else {
    userText.innerText = "Not logged in";
  }
});
