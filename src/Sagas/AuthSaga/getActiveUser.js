import { call, put } from 'redux-saga/effects';
import authActions from '../../Redux/AuthRedux';
import apiActions from '../../Redux/ApiRedux';
import activeUser from '../../Services/Firebase/FirebaseCurrentUser';

export default function* getActiveUser(firebase, api) {

  if (firebase.currentUser) {
    yield [
      put(authActions.activeUserTrue()),
      put(apiActions.fetching()),
    ];

    const response = yield call(() => api.getUser(currentUser.uid));
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
  } else {
    yield put(authActions.activeUserFalse());
  }
}
