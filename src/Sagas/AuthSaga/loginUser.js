import { call, put } from 'redux-saga/effects';
import authActions from '../../Redux/AuthRedux';
import apiActions from '../../Redux/ApiRedux';

export default function* loginUser(firebase, { credentials }) {
  const response = yield call(() =>
  firebase.signInWithEmailAndPassword(credentials.email, credentials.password)
  .then(user => ({
    ok: true,
    user,
  }))
  .catch(error => ({
    ok: false,
    problem: error,
  })));
  console.log('response: ', response);
  if (response.ok) {
    yield [put(authActions.loginSuccess(response.data)),
    put(apiActions.apiSuccess())];
  } else {
    yield [put(authActions.loginFail(response.problem)),
      put(apiActions.apiFail(response.data))];
  }
}
