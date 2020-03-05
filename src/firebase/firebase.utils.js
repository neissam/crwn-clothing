import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBe9AAy7sJM1fi_qdDJBq5qVtfk2yOy5ZI",
  authDomain: "crwn-db-69beb.firebaseapp.com",
  databaseURL: "https://crwn-db-69beb.firebaseio.com",
  projectId: "crwn-db-69beb",
  storageBucket: "crwn-db-69beb.appspot.com",
  messagingSenderId: "438541725900",
  appId: "1:438541725900:web:eba727621fd4a8a1a01269",
  measurementId: "G-5N0W7PN7E6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
