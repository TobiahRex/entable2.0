import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  sendDonation: null,
  donationSuccess: null,
  donationFail: null,
});

export const donationTypes = Types;
export default Creators;

export default INITIAL_STATE = {
  sent: null,
  success: null,
  fail: null,
  amount: 0,
}

const success = (state, action) =>
