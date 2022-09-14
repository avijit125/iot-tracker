// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjJqWPnsdSEnFRNNeTHDlXqdn-HCXg1TA",
  authDomain: "iot-tracker-361822.firebaseapp.com",
  projectId: "iot-tracker-361822",
  storageBucket: "iot-tracker-361822.appspot.com",
  messagingSenderId: "403332904486",
  appId: "1:403332904486:web:9eb37bca0a4865d58258e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const Auth = getAuth(app);