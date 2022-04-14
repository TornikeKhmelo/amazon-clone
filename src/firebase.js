// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhYb8r1aDDr8a6KhGTazmlOwGrLAlSsAQ",
  authDomain: "e-clone-1ab09.firebaseapp.com",
  projectId: "e-clone-1ab09",
  storageBucket: "e-clone-1ab09.appspot.com",
  messagingSenderId: "302271305131",
  appId: "1:302271305131:web:002858de5ec77dab9e2eee",
  measurementId: "G-F3J6C8BS3B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
