// Import the functions you need from the SDKs you need 
// import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: "AIzaSyBRX6G_3mYajBcCQORjYKDctSFbx2Uk2aM",
  authDomain: "auth-manager-ebaea.firebaseapp.com",
  projectId: "auth-manager-ebaea",
  storageBucket: "auth-manager-ebaea.firebasestorage.app",
  messagingSenderId: "476071800063",
  appId: "1:476071800063:web:b1556a0989c1596b1370ca",
  measurementId: "G-KEF925NHGE"
};*/

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Додаємо модуль для аутентифікації
import { getFirestore } from "firebase/firestore"; // Додаємо модуль для Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRX6G_3mYajBcCQORjYKDctSFbx2Uk2aM",
  authDomain: "auth-manager-ebaea.firebaseapp.com",
  projectId: "auth-manager-ebaea",
  storageBucket: "auth-manager-ebaea.firebasestorage.app",
  messagingSenderId: "476071800063",
  appId: "1:476071800063:web:b1556a0989c1596b1370ca",
  measurementId: "G-KEF925NHGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Експортуємо auth для аутентифікації
export const db = getFirestore(app); // Експортуємо db для Firestore
