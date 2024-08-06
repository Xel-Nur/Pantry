// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfj-XLcDNAdt90ZD_6Ob5dSC4RwURkcaQ",
  authDomain: "inventory-manage-f7bd3.firebaseapp.com",
  projectId: "inventory-manage-f7bd3",
  storageBucket: "inventory-manage-f7bd3.appspot.com",
  messagingSenderId: "269174553410",
  appId: "1:269174553410:web:611ef2fe19ca2682f626db",
  measurementId: "G-YZW1QDF0XY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore= getFirestore(app);

export {firestore}