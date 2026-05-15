// Firebase SDK initialization
// Security note: This config is safe to expose in frontend code.
// The Firestore security rules enforce strict write-only access to
// contactMessages — no read, update, or delete is allowed publicly.
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZ9GZTob7eUsvHEI8bid0r-j2nTlqacic",
  authDomain: "akash-portfolio-contact.firebaseapp.com",
  projectId: "akash-portfolio-contact",
  storageBucket: "akash-portfolio-contact.firebasestorage.app",
  messagingSenderId: "379818104004",
  appId: "1:379818104004:web:048af57684a098bbcc2591",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
