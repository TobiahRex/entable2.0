import { call, put } from 'redux-saga/effects';
import 

export default function* registerUser(firebase, { info }) {
  const response = yield call(() =>
  firebase.createUserWithEmailAndPassword(info.email, info.password)
  .then(user => user)
  .catch(err => err)
);

  if (response.uid) {
    const { refreshToken, uid } = response;
    console.log('providerData: ', );
  } else {
    const { code, message } = response;
    /* Firebase Errors:
    1. auth/weak-password - the password supplied is too short.
    2. auth/already-in-use - the email used is already registered.
    */
    console.log('error: ', code, 'message: ', message);
  }
}
