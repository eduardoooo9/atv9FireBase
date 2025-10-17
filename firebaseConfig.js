// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2q6-79vZZif-0P6TsFBYxnQOLvUGRBCA",
  authDomain: "dudu-d69c4.firebaseapp.com",
  projectId: "dudu-d69c4",
  storageBucket: "dudu-d69c4.firebasestorage.app",
  messagingSenderId: "919555895727",
  appId: "1:919555895727:web:e3cf1f3d3bf33da5db7f5a"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta a autenticação (para usar nas telas)
export const auth = getAuth(app);
