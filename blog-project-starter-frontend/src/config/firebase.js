import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCtlWG1dC6ss-Cj80T7aEWYaq-BQQDdFrg",
  authDomain: "blog-app-emc-a02e5.firebaseapp.com",
  projectId: "blog-app-emc-a02e5",
  storageBucket: "blog-app-emc-a02e5.firebasestorage.app",
  messagingSenderId: "405052335848",
  appId: "1:405052335848:web:82da50d06c96671668cb5d",
  measurementId: "G-5LLFPNM9H9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;