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
  fail: null,
  success: null,
  response: null,
};

const success = state => ({
  amount: state.amount,
  sent: true,
  fail: false,
  success: true,
  response: null,
});

const fail = (state, { response }) => ({
  amount: state.amount,
  sent: true,
  fail: true,
  success: false,
  response,
});

const update = (state, { amount }) => ({
  amount,
  sent: true,
  fail: false,
  succcess: true,
  response: null,
});

export const donationReducer = createReducer(INITIAL_STATE, {
  [Types.SEND_DONATION]: update,
  [Types.DONATION_SUCCESS]: success,
  [Types.DONATION_FAIL]: fail,
});
