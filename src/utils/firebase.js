// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABTUYor7CdCuoyjqAJciKNTtI1oekdboU",
  authDomain: "netflixgpt-51867.firebaseapp.com",
  projectId: "netflixgpt-51867",
  storageBucket: "netflixgpt-51867.appspot.com",
  messagingSenderId: "15485664953",
  appId: "1:15485664953:web:0873c4f430aa0311436568",
  measurementId: "G-3EGGHQLPF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();