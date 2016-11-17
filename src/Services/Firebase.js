import firebase from 'firebase';

var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.msgSenderId,
};

firebase.initializeApp(config);
