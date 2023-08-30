// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgdzmNv6IPkLazIj44AGeyeTVq0mhUCB0",
  authDomain: "netflix-gpt-1a7e2.firebaseapp.com",
  projectId: "netflix-gpt-1a7e2",
  storageBucket: "netflix-gpt-1a7e2.appspot.com",
  messagingSenderId: "238911635178",
  appId: "1:238911635178:web:82e230d5d2f956b656a193",
  measurementId: "G-6R1DKLDFH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();