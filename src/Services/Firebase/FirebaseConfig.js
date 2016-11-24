import firebase from 'firebase';

const config = {
  apiKey: process.env.apiKeyFirebase,
  authDomain: process.env.authDomainFirebase,
  databaseURL: process.env.databaseURLFirebase,
  storageBucket: process.env.storageBucketFirebase,
  messagingSenderId: process.env.msgSenderIdFirebase,
};
firebase.initializeApp(config);
export const firebaseDB = firebase.database();
export const firebaseAuth = firebase.auth();
export const rootRef = firebase.database().ref();
export const { currentUser } = firebaseAuth;
