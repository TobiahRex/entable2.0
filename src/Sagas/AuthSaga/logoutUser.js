import { call, put } from 'redux-saga/effects';
import authActions from '../../Redux/AuthRedux';

export default function* logoutUser(firebase) {
  const response = yield call(() =>
  firebase.signOut()
  .then(() => ({
    ok: true,
    problem: false,
  })));

  if (response.ok) {
    yield put(authActions.logoutUserSuccess());
  }
}
