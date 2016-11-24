import { call, put } from 'redux-saga/effects';
import apiActions from '../../Redux/ApiRedux';
import authActions from '../../Redux/AuthRedux';

export default function* registerUser(firebase, api, { info }) {
  const response = yield call(() =>
  firebase.createUserWithEmailAndPassword(info.email, info.password)
  .then(user => user)
  .catch(err => err));

  // if firebase successfully creates a new user...
  if (response.uid) {
    const { uid } = response;
    const newUserInfo = { ...info, uid_firebase: uid };

    /* dispatch the following actions...
    1. success action for firebase creating new user
    2. an api fetching actions in lieu of the next action
    3. a local database saving action.
    */
    yield [
      put(authActions.createUserSuccess(newUserInfo)),
      put(apiActions.fetching()),
      put(authActions.saveNewUser(newUserInfo)),
    ];

    // call an asynch api action for saving a new user
    const dbResponse = yield call(() => api.saveNewUser(newUserInfo));

    if (dbResponse.ok) {
      // dispatch the respective succcess actions
      yield [
        put(authActions.saveNewUserSuccess(dbResponse.data)),
        put(apiActions.apiSuccess()),
      ];
    } else {
      // dispatch the respective failing actions
      yield [
        put(authActions.saveNewUserFail(response.problem)),
        put(apiActions.apiFail()),
      ];
    }
  } else {
    // dispatch the failing action for creating a new user from firebase.
    const { code, message } = response;
    /* Firebase Errors:
    1. auth/weak-password - the password supplied is too short.
    2. auth/already-in-use - the email used is already registered.
    */
    yield put(authActions.createUserFail({ code, message }));
  }
}
