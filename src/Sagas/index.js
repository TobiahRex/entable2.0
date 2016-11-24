import { takeLatest } from 'redux-saga';
import API from '../Services/API';
import { firebaseAuth } from '../Services/Firebase/FirebaseConfig';

import getActiveUserSaga from './AuthSaga/getActiveUser';
import createUserSaga from './AuthSaga/createUser';
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
    takeLatest(AuthTypes.GET_ACTIVE_USER, getActiveUserSaga, firebase, api),
    takeLatest(AuthTypes.CREATE_USER_FIREBASE, createUserSaga, firebase, api),
    takeLatest(BankTypes.GET_ALL_BANKS, getBanksSaga, api),
    takeLatest(BankTypes.GET_EXCHANGE_RATE, getPriceSaga, api),
    takeLatest(TwilioTypes.SEND_TEXT, sendTextSaga, api),
    takeLatest(StripeTypes.SEND_TOKEN, sendTokenSaga, api),
  ];
}
