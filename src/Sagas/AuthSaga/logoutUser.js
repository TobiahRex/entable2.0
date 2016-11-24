import { call, put } from 'redux-saga/effects';
import authActions from '../../Redux/AuthRedux';

export default function* logoutUser(firebase) {
  const response = yield call(() =>
  firebase.signOut()
  .then(() => ({
    ok: true,
    problem: false,
  }))
  .catch(() => ({
    ok: false,
    problem: 'Could not sign out user.',
  })));

  if (response.ok) {
    yield put(authActions.logoutUserSuccess());
  } else {
    yield put(authActions.logoutUserFail(response.problem));
  }
}
