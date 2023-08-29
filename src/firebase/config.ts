import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAfCqeHHso3QdqHRI0ga0i5fNJffxKK5pg",
  authDomain: "credit-cards-system.firebaseapp.com",
  projectId: "credit-cards-system",
  storageBucket: "credit-cards-system.appspot.com",
  messagingSenderId: "635636889279",
  appId: "1:635636889279:web:3cc44ed62ef6b0a116b80a",
  measurementId: "G-PECG6C1ZQT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};