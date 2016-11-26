import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  getDonations: ['_id'],
  getDonationsSuccess: ['donations'],
  getDonationsFail: ['error'],
});

export default Creators;
export const donorTypes = Types;

export const INITIAL_STATE = {
  donations: [],
  error: null,
};

const success = (state, { donations }) => ({
  donations,
  error: null,
});

const fail = (state, { error }) => ({
  donations: state.donations,
  error,
});

export const donorReducer = createReducer(INITIAL_STATE, {
  [Types.GET_DONATIONS_SUCCESS]: success,
  [Types.GET_DONATIONS_FAIL]: fail,
});
