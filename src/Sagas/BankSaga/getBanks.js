import { call, put } from 'redux-saga/effects';
import bankActions from '../../Redux/BankRedux';
import apiActions from '../../Redux/ApiRedux';

export default function* getBanks(api) {
  const response = yield call(api.getAllBanks);

  if (response.ok) {
    yield [put(bankActions.getAllBanksSuccess(response.data)),
    put(apiActions.apiSuccess())];
  } else {
    yield put(apiActions.apiFail(response.data));
  }
}
