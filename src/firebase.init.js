// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2x4rJGEfl_IISt3ysRfmsdG-r4GA4__0",
  authDomain: "router-firebase-integrat-42deb.firebaseapp.com",
  projectId: "router-firebase-integrat-42deb",
  storageBucket: "router-firebase-integrat-42deb.appspot.com",
  messagingSenderId: "299139864157",
  appId: "1:299139864157:web:c7bc27bc62db6f1f085fb4",
  measurementId: "G-MYXRCB5NX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export default app;