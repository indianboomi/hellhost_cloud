import { firebaseConfig } from './firebase-config.js';

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const message = document.getElementById("message");

window.register = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      message.innerText = "Registered Successfully";
    })
    .catch(error => {
      message.innerText = error.message;
    });
};

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      message.innerText = "Login Successful";
    })
    .catch(error => {
      message.innerText = error.message;
    });
};

window.googleLogin = function () {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then(() => {
      message.innerText = "Google Login Success";
    })
    .catch(error => {
      message.innerText = error.message;
    });
};

window.githubLogin = function () {
  const provider = new GithubAuthProvider();

  signInWithPopup(auth, provider)
    .then(() => {
      message.innerText = "GitHub Login Success";
    })
    .catch(error => {
      message.innerText = error.message;
    });
};

window.logout = function () {
  signOut(auth)
    .then(() => {
      message.innerText = "Logged Out";
    });
};
