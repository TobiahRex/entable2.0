import { call, put } from 'redux-saga/effects';

import apiActions from '../../Redux/ApiRedux';
import stripeActions from '../../Redux/StripeRedux';

export default function* sendToken(api, { token }) {
  const response = yield call(() => api.sendToken(token));

  if (response.ok) {
    yield [put(stripeActions.sendTokenSuccess(response.data)),
    put(apiActions.apiSuccess())];
  } else {
    yield [put(stripeActions).sendTokenFail(response.data),
    put(apiActions.apiFail(response.problem))];
  }
}
