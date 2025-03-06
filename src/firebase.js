// src/firebase.js
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics"; //optional
//import { getFirestore } from "firebase/firestore"; //example firestore import

const firebaseConfig = {
    apiKey: "AIzaSyDBWdDkxBgj98nxVg1MP8YnNnT-9YMTs24",
    authDomain: "villadeazores-test.firebaseapp.com",
    projectId: "villadeazores-test",
    storageBucket: "villadeazores-test.firebasestorage.app",
    messagingSenderId: "386842081913",
    appId: "1:386842081913:web:a06760d14c2702fa0ef2a8",
    measurementId: "G-6VQ6XYGLR4" //optional
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app); //optional
//const db = getFirestore(app); //example firestore initialization.

export default app; //export app to use in your react components.
//export {db}; //export db to use in your react components.