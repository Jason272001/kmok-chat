import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbL3g4RDs40uuhnq9U_-X0QOiExDxSfXk",
  authDomain: "komk-6533e.firebaseapp.com",
  projectId: "komk-6533e",
  storageBucket: "komk-6533e.appspot.com",
  messagingSenderId: "321049437455",
  appId: "1:321049437455:web:aafb3898eb888015b88a7a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
