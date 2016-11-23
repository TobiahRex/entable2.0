import { call, put } from 'redux-saga/effects';
import authActions from '../../Redux/AuthRedux';

export default function* registerUser(firebase, api, { info }) {
  const response = yield call(() =>
  firebase.createUserWithEmailAndPassword(info.email, info.password)
  .then(user => user)
  .catch(err => err));

  if (response.uid) {
    const { refreshToken, uid } = response;
    const newUserInfo = { info, ...refreshToken, ...uid };
    yield [put(authActions.saveNewUser(newUserInfo))];
  } else {
    const { code, message } = response;
    /* Firebase Errors:
    1. auth/weak-password - the password supplied is too short.
    2. auth/already-in-use - the email used is already registered.
    */
    console.log('error: ', code, 'message: ', message);
  }
}