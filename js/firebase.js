import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth, RecaptchaVerifier } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMsCigfdFk89C2GmlrD6UfAUubnBCI2ug",
  authDomain: "shop-49af5.firebaseapp.com",
  projectId: "shop-49af5",
  storageBucket: "shop-49af5.appspot.com",
  messagingSenderId: "748467891098",
  appId: "1:748467891098:web:5409bc07ad540e356b460f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, RecaptchaVerifier };