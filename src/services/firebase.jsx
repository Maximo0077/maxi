// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import getFirestore function

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXLP8ebmjic-YwgNMMV79c-8HLPRwnBAg",
  authDomain: "mxitienda.firebaseapp.com",
  projectId: "mxitienda",
  storageBucket: "mxitienda.appspot.com",
  messagingSenderId: "148996841774",
  appId: "1:148996841774:web:6d2f99b38ecd8e11779abf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore database
const db = getFirestore(app);

export { db }; // Export the 'db' variable
