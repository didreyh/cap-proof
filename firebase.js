// firebase.js (ESM - works on GitHub Pages)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

// 🔥 Use your existing Firebase config (same as you posted)
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