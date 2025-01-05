import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs,query,where,onSnapshot, getDoc,addDoc,deleteDoc,doc,updateDoc, arrayUnion } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 
const firebaseConfig = {
  apiKey: "AIzaSyC2diMojLNiCgMj3GUcddUswDv30W5WLxE",
  authDomain: "perdaycoaching.firebaseapp.com",
  databaseURL: "https://perdaycoaching-default-rtdb.firebaseio.com",
  projectId: "perdaycoaching",
  storageBucket: "perdaycoaching.appspot.com",
  messagingSenderId: "303500461503",
  appId: "1:303500461503:web:6f302572d6ba2750880d0a",
  measurementId: "G-7KYX2TL73M"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage ,collection,getDoc,onSnapshot, where,query,getDocs, addDoc,deleteDoc,doc,updateDoc,arrayUnion};
