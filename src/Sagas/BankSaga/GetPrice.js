import { call, put } from 'redux-saga/effects';
import BankActions from '../../Redux/BankRedux';
import apiActions from '../../Redux/ApiRedux';

export default function* getPrice(api, { pair }) {
  const response = yield call(() => api.getExchangeRate(pair));

  if (response.ok) {
    yield [put(BankActions.getExchangeRateSuccess(response.data)),
    apiActions.apiSuccess()];
  } else {
    yield put(apiActions.apiFail(response.problem));
  }
}
