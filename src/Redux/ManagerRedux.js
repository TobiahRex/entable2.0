import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  findBankManager: ['managerId'],
  findBankManagerSuccess: ['bank'],
  findBankManagerFail: ['error'],
});

export default Creators;
export const ManagerTypes = Types;
export const INITIAL_STATE = {
  _id: null,
  manager_active: false,
  bank: null,
  error: null,
};


const success = (state, { bank }) => ({
  _id: bank[0]._id,
  manager_active: true,
  bank: bank[0],
  error: null,
});

const fail = (state, { error }) => ({
  _id: null,
  manager_active: false,
  bank: null,
  error,
});

export const managerReducer = createReducer(INITIAL_STATE, {
  [Types.FIND_BANK_MANAGER_SUCCESS]: success,
  [Types.FIND_BANK_MANAGER_FAIL]: fail,
});
