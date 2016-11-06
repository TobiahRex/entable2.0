import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  sendText: ['text'],
  textSuccess: ['body'],
  textFail: ['body'],
});

export const TwilioTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  btcText_success: null,
  btcText_error: null,
  response: {},
};

const textSuccess = (state, { body }) => ({
  btcText_success: true,
  btcText_error: false,
  response: body,
});

const textFail = (state, { body }) => ({
  btcText_error: true,
  btcText_success: false,
  response: body,
});

export const twilioReducer = createReducer(INITIAL_STATE, {
  [Types.TEXT_FAIL]: textFail,
  [Types.TEXT_SUCCESS]: textSuccess,
});
