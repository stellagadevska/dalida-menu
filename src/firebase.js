import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCLO0bz2qZ_KKii3Rsrf9nadeFlLQ3p0S0",
  authDomain: "dalida-menu.firebaseapp.com",
  projectId: "dalida-menu",
  storageBucket: "dalida-menu.firebasestorage.app",
  messagingSenderId: "442126931082",
  appId: "1:442126931082:web:e80388da57a6cba0bc0973",
  measurementId: "G-XDXESW0E0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);