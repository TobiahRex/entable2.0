import { call, put } from 'redux-saga/effects';
import userActions from '../../Redux/UserRedux';
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
    yield [put(userActions.loginSuccess(response.data)),
    put(apiActions.apiSuccess())];
  } else {
    yield [put(userActions.loginFail(response.problem)),
      put(apiActions.apiFail(response.data))];
  }
}
