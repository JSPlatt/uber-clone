import { initializeApp } from "firebase/app";
import { GoogleAuthProvider , getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIl-eedT8xPKQjdIXyIorqps2j2qmWu8I",
  authDomain: "uber-next-clone-ce6fc.firebaseapp.com",
  projectId: "uber-next-clone-ce6fc",
  storageBucket: "uber-next-clone-ce6fc.appspot.com",
  messagingSenderId: "563209299759",
  appId: "1:563209299759:web:9fb39874d73a062be063da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }