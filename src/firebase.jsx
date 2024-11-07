import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Correct import for Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyBCsL0nEvyQxScMlw5FDsfs7UuTKopdOAo",
  authDomain: "tokengenerator-85ccb.firebaseapp.com",
  projectId: "tokengenerator-85ccb",
  storageBucket: "tokengenerator-85ccb.appspot.com",
  messagingSenderId: "545985494948",
  appId: "1:545985494948:web:5717d36cb71d26292bcb31",
  measurementId: "G-WV01Q7TD2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Storage
const storage = getStorage(app);

export { auth, db, storage ,collection, getDocs, addDoc};
