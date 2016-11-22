import { firebaseAuth, firebaseDB } from './FirebaseConfig';

export const firebaseEmailSignIn = (email, password) =>
firebaseAuth.signInWithEmailAndPassword(email, password)
.then((user) => {
  firebaseDB.ref(`active/${user.uid}`).set({
    login: Date.now(),
    user: user.uid,
  });
})
.then(() => {
  let user = firebaseAuth.currentUser;
  firebaseDB.ref(`settings/${user.uid}`).once('value', (settingsSnap) => {
    firebaseDB.ref(`users/${user.uid}`).once('value', (profileSnap) => {
      firebaseDB.ref('active').once('value', (activeSnap) => {
        user = profileSnap.val();
        const settings = settingsSnap.val();
        const users = activeSnap.val();
        return { user, settings, users };
      });
    });
  });
})
.catch((err) => {
  this.props.loginFailure();
  throw Error('Sign In Error', err.message);
});

export const firebaseSignInFacebook = () =>
alert('this is the facebook social login');
