// firebase.js (NO top-level await)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCMuFIBYcEWJCknOsA-hRctc6I7v4Sr_gU",
  authDomain: "cap-proof.firebaseapp.com",
  projectId: "cap-proof",
  storageBucket: "cap-proof.firebasestorage.app",
  messagingSenderId: "722260489486",
  appId: "1:722260489486:web:e4c8111afb86586f2fd35f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);