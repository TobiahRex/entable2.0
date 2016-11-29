import { firebaseAuth } from './FirebaseConfig';

export default () => {
  firebaseAuth.onAuthStateChanged((user) => {
    if (user) {
      console.log('user: ', user);
    } else {
      console.log('nothing: ', user);
    }
  });
};
