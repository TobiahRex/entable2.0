import { call, put } from 'redux-saga/effects';
import managerActions from '../../Redux/ManagerRedux';
import apiActions from '../../Redux/ApiRedux';

export default function* (api, { managerId }) {
  const response = yield call(() => api.findBankManager(managerId));
  console.log('findBankManager RESPONSE: \n', response.data);
  if (response.ok) {
    yield [
      put(apiActions.apiSuccess()),
      put(managerActions.findBankManagerSuccess(response.data)),
    ];
  } else {
    yield [
      put(apiActions.apiFail()),
      put(managerActions.findBankManagerFail(response.problem)),
    ];
  }
}
