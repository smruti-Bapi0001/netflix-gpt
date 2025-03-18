// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuKuj6dwn-nIgURcvE3UBDATu1ZQeqYpg",
  authDomain: "netflix-gpt-b9411.firebaseapp.com",
  projectId: "netflix-gpt-b9411",
  storageBucket: "netflix-gpt-b9411.firebasestorage.app",
  messagingSenderId: "590111239906",
  appId: "1:590111239906:web:0e94f6dd77804366b3f8bb",
  measurementId: "G-BKH5B9J2W1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();