import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCMuFIBYcEWJCknOsA-hRctc6I7v4Sr_gU",
  authDomain: "cap-proof.firebaseapp.com",
  projectId: "cap-proof",
  storageBucket: "cap-proof.firebasestorage.app",
  messagingSenderId: "722260489486",
  appId: "1:722260489486:web:e4c8111afb86586f2fd35f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;