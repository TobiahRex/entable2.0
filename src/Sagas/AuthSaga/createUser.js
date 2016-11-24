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

    yield [
      put(authActions.createUserSuccess(newUserInfo)),
      put(apiActions.fetching()),
      put(authActions.saveNewUser(newUserInfo)),
    ];

    const dbResponse = yield call(() => api.saveNewUser(newUserInfo));

    if (dbResponse.ok) {
      yield [
        put(authActions.saveNewUserSuccess(dbResponse.data)),
        put(apiActions.apiSuccess()),
      ];
    } else {
      yield [
        put(authActions.saveNewUserFail(response.problem)),
        put(apiActions.apiFail()),
      ];
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
