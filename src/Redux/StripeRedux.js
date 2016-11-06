import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  sendToken: ['token'],
  sendTokenSuccess: ['response'],
  sendTokenFail: ['response'],
});

export const StripeTypes = Types;
export default Creators;

export const INITIAL_STATE: {
  sendToken_success: null,
  sendToken_fail: null,
  response: null,
};

export const tokenSuccess = (state, { response }) => ({
  sendToken_success: true,
  sendToken_fail: false,
  response,
});

export const tokenFailure = (state, { response }) => ({
  sendToken_success: false,
  sendToken_fail: true,
  response,
});

export const stripeReducer = createReducer(INITIAL_STATE, {
  [Types.SEND_TOKEN_SUCCESS]: tokenSuccess,
  [Types.SEND_TOKEN_FAIL]: tokenFailure,
});
