import Promise from 'bluebird';
import firebase, { firebaseAuth } from './FirebaseConfig';

const getCurrentUser = () =>
new Promise((resolve, reject) => {
  setTimeout(() => {
    const currentUser = firebase.auth().currentUser;
    console.info('received current user from firebase');
    if (currentUser) resolve(currentUser);
    reject('There is no active user');
  }, 2000);
});
export default getCurrentUser;
