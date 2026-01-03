<script type="module">
  // Firebase SDKs (browser CDN)
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCMuFIBYcEWJCknOsA-hRctc6I7v4Sr_gU",
    authDomain: "cap-proof.firebaseapp.com",
    projectId: "cap-proof",
    storageBucket: "cap-proof.firebasestorage.app",
    messagingSenderId: "722260489486",
    appId: "1:722260489486:web:e4c8111afb86586f2fd35f"
  };

  // Init
  window.app = initializeApp(firebaseConfig);
  window.auth = getAuth(app);
  window.db = getFirestore(app);
  window.storage = getStorage(app);
</script>