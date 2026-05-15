// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuQ1uw_bqhgj_wEJ5--KujbRJByQpiF8U",
  authDomain: "hellhostlogin.firebaseapp.com",
  projectId: "hellhostlogin",
  storageBucket: "hellhostlogin.firebasestorage.app",
  messagingSenderId: "943477772588",
  appId: "1:943477772588:web:42fa628547d92005a79c89",
  measurementId: "G-EEQFV45KV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
