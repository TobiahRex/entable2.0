import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  sendText: ['text'],
  textSuccess: ['body'],
  textFail: ['body'],
});

export const twilioTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  text_success: null,
  text_error: null,
  response: {},
};

const textSuccess = (state, { body }) => ({
  text_success: true,
  text_error: false,
  response: body,
});

const textFail = (state, { body }) => ({
  text_errror: true,
  text_success: false,
  response: body,
});

export const twilioReducer = createReducer(INITIAL_STATE, {
  [Types.SENT_TEXT_FAIL]: textFail,
  [Types.SENT_TEXT_SUCCESS]: textSuccess,
});
