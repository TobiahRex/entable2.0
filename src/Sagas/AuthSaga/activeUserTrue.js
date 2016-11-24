import { call, put } from 'redux-saga/effects';
import authActions from '../../Redux/AuthRedux';
import apiActions from '../../Redux/ApiRedux';

export default function* activeUserTrue(api, { user }) {
  yield [
    put(authActions.activeUserTrue()),
    put(apiActions.fetching()),
  ];
  const response = yield call(() => api.getUser(user.uid));
  if (response.ok) {
    yield [
      put(authActions.getActiveUserSuccess(response.data)),
      put(apiActions.apiSuccess()),
    ];
  } else {
    yield [
      put(authActions.getActiveUserFail(response.problem)),
      put(apiActions.apiFail()),
    ];
  }
}
