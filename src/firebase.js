// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiTBVL-XxgLL1Y7UmU2PM1smh2XkC-3Is",
  authDomain: "admin-dashboard-12122002.firebaseapp.com",
  projectId: "admin-dashboard-12122002",
  storageBucket: "admin-dashboard-12122002.appspot.com",
  messagingSenderId: "775796417246",
  appId: "1:775796417246:web:3588ccd57a59b08f4d184f",
  measurementId: "G-006JPY0WPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;