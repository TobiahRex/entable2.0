import { call, put } from 'redux-saga/effects';
import authActions from '../../Redux/AuthRedux';

export default function* registerUser(firebase, api, { info }) {
  const response = yield call(() =>
  firebase.createUserWithEmailAndPassword(info.email, info.password)
  .then(user => user)
  .catch(err => err));

  if (response.uid_firebase) {
    const { refreshToken, uid_firebase } = response;
    const newUserInfo = { ...info, refreshToken, uid_firebase };
    console.log('newUserInfo: ', newUserInfo);
    const dbResponse = yield call(() => api.saveNewUser(newUserInfo));
    yield put(authActions.createUserSuccess(newUserInfo));

    if (dbResponse.ok) {
      console.log('yay it worked', dbResponse.data);
    } else {
      console.log('bummer it failed ', dbResponse.problem);
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
