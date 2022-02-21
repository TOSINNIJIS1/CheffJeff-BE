import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'; 
import "firebase/database";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB2h-iRNgkAe9v_7R1_vzANhdIVv91P0g",
  authDomain: "cheffjeffart.firebaseapp.com",
  databaseURL: "https://cheffjeffart-default-rtdb.firebaseio.com",
  projectId: "cheffjeffart",
  storageBucket: "cheffjeffart.appspot.com",
  messagingSenderId: "176880818816",
  appId: "1:176880818816:web:a3a27da4ee75f8a238a465",
  measurementId: "G-DQ1GF6080S",
};

// Initialize Firebase once
function fireBaseIntialization () {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

fireBaseIntialization()

const artStorage = firebase.storage()
const artFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { artStorage, artFirestore, timestamp, firebase };

