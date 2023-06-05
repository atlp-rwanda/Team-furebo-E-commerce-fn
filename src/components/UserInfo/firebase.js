// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHFC6cbCNo6BytyRAUd5J4AtFCo6CO4bE",
  authDomain: "uploadingfile-ac5bb.firebaseapp.com",
  projectId: "uploadingfile-ac5bb",
  storageBucket: "uploadingfile-ac5bb.appspot.com",
  messagingSenderId: "434862058402",
  appId: "1:434862058402:web:4357bdcadc173c552160fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)