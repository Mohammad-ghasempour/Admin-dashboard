import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";



// apiKey: process.env.REACT_APP_FIREBASE_KEY,

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "oxindashboard.firebaseapp.com",
  projectId: "oxindashboard",
  storageBucket: "oxindashboard.appspot.com",
  messagingSenderId: "92048265327",
  appId: "1:92048265327:web:01a33601c79536025c7d9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();


