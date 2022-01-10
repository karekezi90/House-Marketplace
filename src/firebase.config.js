// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxTMAsV-SI7Su48cOeGT8Fk3HQTJdGQpI",
  authDomain: "remote-it-all.firebaseapp.com",
  databaseURL: "https://remote-it-all.firebaseio.com",
  projectId: "remote-it-all",
  storageBucket: "remote-it-all.appspot.com",
  messagingSenderId: "944479643435",
  appId: "1:944479643435:web:c05abc604f03f7643b076e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()