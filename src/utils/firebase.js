// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY_yc3ZQJ9V6OkUqg3ywBk0IO83LHTJSg",
  authDomain: "netflixgpt-abf1b.firebaseapp.com",
  projectId: "netflixgpt-abf1b",
  storageBucket: "netflixgpt-abf1b.appspot.com",
  messagingSenderId: "477977495080",
  appId: "1:477977495080:web:ebe6fce04aa8bda81b571d",
  measurementId: "G-06CG09X79M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();