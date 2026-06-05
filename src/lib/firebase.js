import { initializeApp } from "firebase/app";
import {
  getFirestore,
} from "firebase/firestore";
import {
  getAuth,
} from "firebase/auth";

  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQuN8VNDfxNU-DGcxayxlphKR3Y5663Yg",
  authDomain: "chicnfire-70db2.firebaseapp.com",
  projectId: "chicnfire-70db2",
  storageBucket: "chicnfire-70db2.firebasestorage.app",
  messagingSenderId: "408342382586",
  appId: "1:408342382586:web:78d57ce5ddf468e5350643"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =
  getFirestore(app);
  export const auth =
  getAuth(app);