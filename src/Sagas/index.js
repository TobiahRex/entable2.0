import { takeLatest } from 'redux-saga';
import API from '../Services/API';
import { firebaseAuth as firebase } from '../Services/Firebase/FirebaseConfig';

import registerUserSaga from './AuthSaga/registerUser';
import getPriceSaga from './BankSaga/getPrice';
import getBanksSaga from './BankSaga/getBanks';
import sendTextSaga from './TwilioSaga/sendText';
import sendTokenSaga from './StripeSaga/sendToken';

import { AuthTypes } from '../Redux/AuthRedux';
import { BankTypes } from '../Redux/BankRedux';
import { TwilioTypes } from '../Redux/TwilioRedux';
import { StripeTypes } from '../Redux/StripeRedux';

const api = API.createAPI();

export default function* rootSaga() {
  yield [takeLatest(AuthTypes.REGISTER_USER, registerUserSaga, firebase),
  takeLatest(BankTypes.GET_ALL_BANKS, getBanksSaga, api),
  takeLatest(BankTypes.GET_EXCHANGE_RATE, getPriceSaga, api),
  takeLatest(TwilioTypes.SEND_TEXT, sendTextSaga, api),
  takeLatest(StripeTypes.SEND_TOKEN, sendTokenSaga, api)];
}
