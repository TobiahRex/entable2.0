import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  getAllBanks: null,
  getAllBanksSuccess: ['banks'],  // this string "banks" is the name of the payload.  To be clear, the action has two properties, "type" & "banks".  the property "banks" has the data of banks as an array as the value.
  getExchangeRate: ['pair'],
  getExchangeRateSuccess: ['rate'],
});

export const BankTypes = Types;
export default Creators;

export const INITIAL_STATE = [];

const receivedBanks = (state = [], { banks }) => banks || state;
const receivedRate = (state = {}, { rate }) => rate || state;

export const bankReducer = createReducer(INITIAL_STATE, {
  [Types.GET_ALL_BANKS_SUCCESS]: receivedBanks,
  [Types.GET_EXCHANGE_RATE_SUCCESS]: receivedRate,
});