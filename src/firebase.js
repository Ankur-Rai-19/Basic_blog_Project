// import { initializeApp } from "firebase/app";

import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMXK2aaHskTa4CSRboOZuzlejrF5sMYFY",
    authDomain: "blog-b314e.firebaseapp.com",
    projectId: "blog-b314e",
    storageBucket: "blog-b314e.appspot.com",
    messagingSenderId: "1057044149473",
    appId: "1:1057044149473:web:acd2f99a73b4a24a0033a0",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
export { db };
export default firebase;

export const firestore = firebase.firestore();
