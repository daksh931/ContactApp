// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfiguration = {
  apiKey: "AIzaSyCcor5LJ-K342Qfu1anoUYe0aIrvSo3Xko",
  authDomain: "contactapp-cd617.firebaseapp.com",
  projectId: "contactapp-cd617",
  storageBucket: "contactapp-cd617.appspot.com",
  messagingSenderId: "444927036412",
  appId: "1:444927036412:web:033d2dd9e1af8022274079"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfiguration);
export const db = getFirestore(app);