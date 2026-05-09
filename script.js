// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your config
const firebaseConfig = {
  apiKey: "AIzaSyArPkzW5MtYGqsfBPyargJk0QXt_gAoW4A",
  authDomain: "hellhost-d12d4.firebaseapp.com",
  projectId: "hellhost-d12d4",
};

// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Google Login
window.googleLogin = function () {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      document.getElementById("user").innerText =
        "Welcome " + result.user.displayName;
    })
    .catch((error) => alert(error.message));
};

// GitHub Login
window.githubLogin = function () {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      document.getElementById("user").innerText =
        "Welcome " + result.user.displayName;
    })
    .catch((error) => alert(error.message));
};
