import firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.msgSenderId,
};

firebase.initializeApp(config);
export const firebaseDB = firebase.database();
export const rootRef = firebase.database().ref();
