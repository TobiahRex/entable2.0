import { call, put } from 'redux-saga/effects';
import apiActions from '../../Redux/ApiRedux';
import authActions from '../../Redux/AuthRedux';

export default function* registerUser(firebase, api, { info }) {
  const response = yield call(() =>
  firebase.createUserWithEmailAndPassword(info.email, info.password)
  .then(user => user)
  .catch(err => err));

  if (response.uid_firebase) {
    const { uid_firebase } = response;
    const newUserInfo = { ...info, uid_firebase };
    yield [put(authActions.saveNewUser(newUserInfo)), put()];
    const dbResponse = yield call(() =>
    api.saveNewUser(newUserInfo));
    yield put(authActions.createUserSuccess(newUserInfo));

    if (dbResponse.ok) {
      yield [put(authActions.saveNewUserSuccess(dbResponse.data))]
    } else {

    }

  } else {
    const { code, message } = response;
    /* Firebase Errors:
    1. auth/weak-password - the password supplied is too short.
    2. auth/already-in-use - the email used is already registered.
    */
    console.error('error: ', code, 'message: ', message);
    yield put(authActions.createUserFail(message));
  }
}
