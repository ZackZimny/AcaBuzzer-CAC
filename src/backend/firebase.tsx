import { initializeApp } from "firebase/app"; 
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyDlI33HOQAke6k2Rfi7iIkCT0RXTvmUGlc",

  authDomain: "acabuzzer-aab9f.firebaseapp.com",

  databaseURL: "https://acabuzzer-aab9f-default-rtdb.firebaseio.com",

  projectId: "acabuzzer-aab9f",

  storageBucket: "acabuzzer-aab9f.appspot.com",

  messagingSenderId: "807149235269",

  appId: "1:807149235269:web:9dec7b15c7b6d8d8d6472c",

  measurementId: "G-S7BMPDWER3"

};


const app = initializeApp(firebaseConfig);
// firebaseApps previously initialized using initializeApp()
const db = getFirestore(app);

export {db}
