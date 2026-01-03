// firebase.js (Firebase v8 compat - simplest for static sites)

const firebaseConfig = {
  apiKey: "AIzaSyCMuFIBYcEWJCknOsA-hRctc6I7v4Sr_gU",
  authDomain: "cap-proof.firebaseapp.com",
  projectId: "cap-proof",
  storageBucket: "cap-proof.firebasestorage.app",
  messagingSenderId: "722260489486",
  appId: "1:722260489486:web:e4c8111afb86586f2fd35f"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();