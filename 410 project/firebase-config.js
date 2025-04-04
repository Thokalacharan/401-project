// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config (this is okay to expose in frontend)
const firebaseConfig = {
  apiKey: "AIzaSyDTg4GLVZDHvMXJvivc8IKzQynbasPIgMw",
  authDomain: "phones-bd919.firebaseapp.com",
  projectId: "phones-bd919",
  storageBucket: "phones-bd919.appspot.com",
  messagingSenderId: "160744438745",
  appId: "1:160744438745:web:28519c3d26ed297985f7c8",
  measurementId: "G-50ECTN10R9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
