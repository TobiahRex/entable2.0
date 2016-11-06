import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  sendDonation: ['amount'],
  donationSuccess: null,
  donationFail: ['response'],
});

export const donationTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  amount: 0,
  sent: null,
  success: null,
  fail: null,
  response: null,
};

const success = (state, { amount }) => ({
  amount,
  sent: true,
  fail: false,
  success: true,
  response: null,
});

const fail = (state, { response }) => ({
  amount: 0,
  sent: true,
  fail: true,
  success: false,
  response,
});

export const donationReducer = createReducer(INITIAL_STATE, {
  [Types.DONATION_SUCCESS]: success,
  [Types.DONATION_FAIL]: fail,
});
