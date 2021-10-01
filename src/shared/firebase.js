import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoPuV7AhvLsSFIZ8yOABaQEsw_6kskTec",
  authDomain: "hanghae99-reactplus.firebaseapp.com",
  projectId: "hanghae99-reactplus",
  storageBucket: "hanghae99-reactplus.appspot.com",
  messagingSenderId: "927433137730",
  appId: "1:927433137730:web:3382ea36f220d7f64f17db",
  measurementId: "G-PH060860C9",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, apiKey, firestore };
