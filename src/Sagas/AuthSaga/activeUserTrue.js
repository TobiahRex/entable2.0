import { call, put } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import authActions from '../../Redux/AuthRedux';
import apiActions from '../../Redux/ApiRedux';

export default function* activeUserTrue(api, { user }) {
  yield put(apiActions.fetching());

  const response = yield call(() => api.getUser(user.uid));

  if (response.ok) {
    if (response.data.role === 'donor') {
      browserHistory.push(`/donor/${response.data._id}`);
    } else if (response.role === 'manager') {
      browserHistory.push(`/manager/${response.data._id}`);
    }
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
