import { call, put } from 'redux-saga/effects';
import apiActions from '../../Redux/ApiRedux';
import donorActions from '../../Redux/DonorRedux';

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
