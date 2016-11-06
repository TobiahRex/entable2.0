import { call, put } from 'redux-saga/effects';
import stripeActions from '../../Redux/StripeRedux';
import apiActions from '../../Redux/ApiRedux';
import donationActions from '../../Redux/DonationRedux';

export default function* sendToken(api, { token, info }) {
  const response = yield call(() => api.sendToken(token, info));

  if (response.ok) {
    yield [put(stripeActions.sendTokenSuccess(response.data)),
      put(donationActions.donationSuccess()),
    put(apiActions.apiSuccess())];
  } else {
    yield [put(stripeActions.sendTokenFail(response.data)),
      put(donationActions.donationFail(response.problem)),
    put(apiActions.apiFail(response.problem))];
  }
}
