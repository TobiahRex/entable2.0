import { call, put } from 'redux-saga/effects';
import apiActions from './ApiRedux';
import donorActions from './DonorRedux';

export default function* getDonations(api, { _id }) {
  const response = yield call(() => api.getDonations(_id));

  if (response.ok) {
    yield [
      put(apiActions.apiSuccess()),
      put(donorActions.getDonationsSuccess(response.data)),
    ];
  } else {
    yield [
      put(apiActions.apiFail()),
      put(donorActions.getDonationsFail(response.problem)),
    ];
  }
}
