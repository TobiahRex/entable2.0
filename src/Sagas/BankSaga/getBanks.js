import { call, put } from 'redux-saga/effects';
import BankActions from '../../Redux/BankRedux';
import apiActions from '../../Redux/ApiRedux';

export default function* getBanks(api) {
  const response = yield call(api.getAllBanks);

  if (response.ok) {
    yield [put(BankActions.getAllBanksSuccess(response.data)),
    put(apiActions.apiSuccess())];
  } else {
    yield put(apiActions.apiFail(response.data));
  }
}
