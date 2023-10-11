// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9HR6dLQb5xLMTPqKZWpMD0PN1333A7xI",
  authDomain: "proyectofinalpm-7f532.firebaseapp.com",
  projectId: "proyectofinalpm-7f532",
  storageBucket: "proyectofinalpm-7f532.appspot.com",
  messagingSenderId: "139885788818",
  appId: "1:139885788818:web:d705a547ba889679adb04b",
  measurementId: "G-70V8ZDYERS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);