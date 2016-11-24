import { call, put } from 'redux-saga/effects';
import authActions from '../../Redux/AuthRedux';
import apiActions from '../../Redux/ApiRedux';

export default function* getActiveUser(firebase) {
  const { currentUser } = firebase;

  if (currentUser) {
    yield put(authActions.)
  }
}
