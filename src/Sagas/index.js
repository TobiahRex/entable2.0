import { takeLatest } from 'redux-saga';
import API from '../Services/API';

// import loginUserSaga from './AuthSaga/loginUser';
import getPriceSaga from './BankSaga/getPrice';
import getBanksSaga from './BankSaga/getBanks';
import sendTextSaga from './TwilioSaga/sendText';
import sendTokenSaga from './StripeSaga/sendToken';

// import { UserTypes } from '../Redux/UserRedux';
import { BankTypes } from '../Redux/BankRedux';
import { TwilioTypes } from '../Redux/TwilioRedux';
import { StripeTypes } from '../Redux/StripeRedux';

const api = API.createAPI();

export default function* rootSaga() {
  yield [takeLatest(BankTypes.GET_ALL_BANKS, getBanksSaga, api),
  takeLatest(BankTypes.GET_EXCHANGE_RATE, getPriceSaga, api),
  takeLatest(TwilioTypes.SEND_TEXT, sendTextSaga, api),
  takeLatest(StripeTypes.SEND_TOKEN, sendTokenSaga, api)];
}
