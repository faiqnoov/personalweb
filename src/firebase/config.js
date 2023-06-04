// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDam3fPyFZs36pCyspnLuRAGOy9fckHgYI",
  authDomain: "personalweb-782b9.firebaseapp.com",
  projectId: "personalweb-782b9",
  storageBucket: "personalweb-782b9.appspot.com",
  messagingSenderId: "173025672512",
  appId: "1:173025672512:web:d4b1d316f8d26043348ea5",
  measurementId: "G-3KBC2W20YE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore()

export { app, db }

