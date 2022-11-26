// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyAAyEi4ggor_Xl6U269d7quZdGtzxSnZrQ",
  authDomain: "dr-auth-fb.firebaseapp.com",
  projectId: "dr-auth-fb",
  storageBucket: "dr-auth-fb.appspot.com",
  messagingSenderId: "132116040635",
  appId: "1:132116040635:web:409c5a3a717ea666f1d29e",
  measurementId: "G-9BE703D1YM",
};

// init firebase

// const firebase = initializeApp(firebaseConfig);
// const projectFirestore = getFirestore(firebase);
// const timestamp = getAuth(firebase);

// export { firebase, projectFirestore, timestamp}
initializeApp(firebaseConfig)

const db = getFirestore()

const auth = getAuth()

export { auth, db }

