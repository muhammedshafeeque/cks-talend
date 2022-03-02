import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB-BUA4zSGAsfbdmixcxG5dD2ygUpYpUII",
  authDomain: "skssf-158ed.firebaseapp.com",
  projectId: "skssf-158ed",
  storageBucket: "skssf-158ed.appspot.com",
  messagingSenderId: "570323624371",
  appId: "1:570323624371:web:d042aa94f623d76effebc6",
  measurementId: "G-CHTDNMMC3K"
};


const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)
export const auth=getAuth(app)