import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDGFaf-CV36zaxHW1kC91z4LiYet9jIvds",
    authDomain: "metsenat-82ae3.firebaseapp.com",
    projectId: "metsenat-82ae3",
    storageBucket: "metsenat-82ae3.appspot.com",
    messagingSenderId: "187115614593",
    appId: "1:187115614593:web:694f6c280f483814343880"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const auth = firebase.auth();
 const db = firebase.firestore();

 const usersCollection = db.collection('users');

 export { 
   auth,
   db,
   usersCollection,
 }