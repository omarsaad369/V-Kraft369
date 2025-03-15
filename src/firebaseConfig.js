// استيراد Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 

// 🔹 بيانات مشروع Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD6A_vO_LnBGH2_o7L_S7v0f_rPbOJEMLA",
  authDomain: "v-kraft-369.firebaseapp.com",
  projectId: "v-kraft-369",
  storageBucket: "v-kraft-369.appspot.com",
  messagingSenderId: "137243708351",
  appId: "1:137243708351:web:a7d917ba681b98bfa6f0a",
  measurementId: "G-PC4DTCVPJ4"
};

// ✅ تهيئة Firebase
const app = initializeApp(firebaseConfig);

// ✅ تهيئة خدمات Firebase المطلوبة
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ تصدير الكائنات لاستخدامها في باقي التطبيق
export { app, auth, db };
