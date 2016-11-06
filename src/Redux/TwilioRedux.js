import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  sendText: ['text'],
  sentTextSuccess: null,
  sentTextFail: ['error'],
});

export const twilioTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  text_error: {},
};
