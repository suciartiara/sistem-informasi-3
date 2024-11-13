import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNSGt802s05i0_sDIZVZECO9IXir05aV8",
  authDomain: "sistem-informasi-3-c01cb.firebaseapp.com",
  projectId: "sistem-informasi-3-c01cb",
  storageBucket: "sistem-informasi-3-c01cb.firebasestorage.app",
  messagingSenderId: "146347652907",
  appId: "1:146347652907:web:37be44423ce4525ad3776e",
  measurementId: "G-37YELPCB49",
};

const app = initializeApp(firebaseConfig);
const provider = new EmailAuthProvider();
const db = getFirestore(app); 
const auth = getAuth(app);

export { provider, auth, db };