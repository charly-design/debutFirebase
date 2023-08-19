// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB259WEfAHcOLiJGPUGbBHkItP9YXjEFds",
  authDomain: "debutfirebase-854ea.firebaseapp.com",
  projectId: "debutfirebase-854ea",
  storageBucket: "debutfirebase-854ea.appspot.com",
  messagingSenderId: "901541007724",
  appId: "1:901541007724:web:6c0d6adf3e055665aaa349",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
