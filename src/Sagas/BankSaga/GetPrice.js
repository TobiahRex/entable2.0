import { call, put } from 'redux-saga';
import BankActions from '../../Redux/BankRedux';
import apiActions from '../../Redux/ApiRedux';

export default function* (api, action) {
  const response = yield call(() => api.getExchangeRate(action.pair));

  if (response.ok) {
    yield [put(BankActions.getExchangeRateSuccess(response.data)),
    apiActions.apiSuccess()];
  } else {
    yield put(apiActions.apiFail(response.problem));
  }
}
