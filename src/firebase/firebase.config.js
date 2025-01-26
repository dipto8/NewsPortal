// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4vt3S-hB1yXOPHbTtHW18XDm-wJVH8j0",
  authDomain: "thenews-ead52.firebaseapp.com",
  projectId: "thenews-ead52",
  storageBucket: "thenews-ead52.firebasestorage.app",
  messagingSenderId: "1013773014349",
  appId: "1:1013773014349:web:dcb33648546a4ab9e05304"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;