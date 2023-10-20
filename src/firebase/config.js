// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
export const db = getFirestore(app);