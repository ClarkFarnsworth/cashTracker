import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Configure Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyAQV-liXUtHY_Juh48_12AK7UuOOXKT6So",
  authDomain: "cash-tracker-c71be.firebaseapp.com",
  projectId: "cash-tracker-c71be",
  storageBucket: "cash-tracker-c71be.appspot.com",
  messagingSenderId: "174698670000",
  appId: "1:174698670000:web:de26e3c0cf244027495875"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 
