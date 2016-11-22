import { call, put } from 'redux-saga/effects';

export default function* registerUser(firebase, { info }) {
  const response = yield call(() => firebase.signInWithEmailAndPassword(info.email, info.password));
  console.log('response: ', response);
}
