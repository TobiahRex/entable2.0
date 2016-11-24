import { takeLatest } from 'redux-saga';
import API from '../Services/API';
import { firebaseAuth } from '../Services/Firebase/FirebaseConfig';

import activeUserTrueSaga from './AuthSaga/activeUserTrue';
import createUserSaga from './AuthSaga/createUser';
import logoutUserSaga from './AuthSaga/logoutUser';
import getPriceSaga from './BankSaga/getPrice';
import getBanksSaga from './BankSaga/getBanks';
import sendTextSaga from './TwilioSaga/sendText';
import sendTokenSaga from './StripeSaga/sendToken';

import { AuthTypes } from '../Redux/AuthRedux';
import { BankTypes } from '../Redux/BankRedux';
import { TwilioTypes } from '../Redux/TwilioRedux';
import { StripeTypes } from '../Redux/StripeRedux';

const api = API.createAPI();
const firebase = firebaseAuth;

export default function* rootSaga() {
  yield [
    takeLatest(AuthTypes.LOGOUT_USER, logoutUserSaga, firebase),
    takeLatest(AuthTypes.ACTIVE_USER_TRUE, activeUserTrueSaga, api),
    takeLatest(AuthTypes.CREATE_USER_FIREBASE, createUserSaga, firebase, api),
    takeLatest(BankTypes.GET_ALL_BANKS, getBanksSaga, api),
    takeLatest(BankTypes.GET_EXCHANGE_RATE, getPriceSaga, api),
    takeLatest(TwilioTypes.SEND_TEXT, sendTextSaga, api),
    takeLatest(StripeTypes.SEND_TOKEN, sendTokenSaga, api),
  ];
}
