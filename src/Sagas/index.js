import { takeLatest } from 'redux-saga';
import API from '../Services/API';

import getPriceSaga from './BankSaga/getPrice';
import getBanksSaga from './BankSaga/getBanks';

import { BankTypes } from '../Redux/BankRedux';

const api = API.createAPI();

export default function* rootSaga() {
  yield [takeLatest(BankTypes.GET_ALL_BANKS, getBanksSaga, api),
  takeLatest(BankTypes.GET_EXCHANGE_RATE, getPriceSaga, api)];
}
