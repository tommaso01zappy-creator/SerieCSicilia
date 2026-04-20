/* ============================================================
   FIREBASE CONFIGURAZIONE
   ============================================================ */

// ⚠️ Sostituisci questi valori con quelli del tuo progetto Firebase
const firebaseConfig = {
  apiKey: "LA_TUA_API_KEY_REALE",
  authDomain: "il-tuo-progetto.firebaseapp.com",
  projectId: "il-tuo-progetto",
  storageBucket: "il-tuo-progetto.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890abcd"
};

// ============================================================
//  INIZIALIZZAZIONE FIREBASE
// ============================================================

firebase.initializeApp(firebaseConfig);

// Firestore
const db = firebase.firestore();

// Rendo db disponibile globalmente
window.db = db;
