// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEatPojRzi6fNLe7obK4FHb4AYmrk56-k",
  authDomain: "educational-project-assignment.firebaseapp.com",
  projectId: "educational-project-assignment",
  storageBucket: "educational-project-assignment.appspot.com",
  messagingSenderId: "847345081106",
  appId: "1:847345081106:web:26504e96f03e71a17c31cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;