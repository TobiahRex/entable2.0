import { call, put } from 'redux-saga';
import BankActions from '../../Redux/BankRedux';
import apiActions from '../../Redux/ApiRedux';

export default function* create(api, action) {
  const response = yield call(() => api.getExchangeRate(action.pair));

  if (response.ok) {
    yield [put(BankSActions.getExchangeRateSuccess(response.data))];
  } else {
    yield put(apiActions.apiFail(response.problem));
  }
}
