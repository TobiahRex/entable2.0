import { call, put } from 'redux-saga';
import BankActions from '../../Redux/BankRedux';
import apiActions from '../../Services/API';

export default function* (api) {
  const response = yield call(api.getBanks);

  if (response.ok) {
    yield [put(BankActions.getAllBanksSuccess(response.data)),
    put(apiActions.apiSuccess())];
  } else {
    yield put(apiActions.apiFail(response.data));
  }
}
