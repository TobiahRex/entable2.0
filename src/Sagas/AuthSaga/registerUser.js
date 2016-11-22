import { call, put } from 'redux-saga/effects';

export default function* registerUser(firebase, { info }) {
  console.log('firebase in registerUser\n ', firebase);
  const response = yield call(() =>
  firebase.createUserWithEmailAndPassword(info.email, info.password));
  console.log('response: ', response);
}
