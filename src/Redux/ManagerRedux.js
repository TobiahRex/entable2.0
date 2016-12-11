import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  findBankManager: ['managerId'],
  findBankManagerSuccess: ['bank'],
  findBankManagerFail: ['error'],
});

export default Creators;
export const ManagerTypes = Types;
export const INITIAL_STATE = {
  bank_id: null,
  manager_active: false,
  bank: null,
  error: null,
};


const success = (state, { bank }) => {
  if (bank) {
    return ({
      bank_id: bank._id || null,
      manager_active: true,
      bank: bank || null,
      error: null,
    });
  }
  return ({
    bank_id: null,
    manager_active: true,
    bank: null,
    error: null,
  });
};


const fail = (state, { error }) => ({
  bank_id: null,
  manager_active: false,
  bank: null,
  error,
});

export const managerReducer = createReducer(INITIAL_STATE, {
  [Types.FIND_BANK_MANAGER_SUCCESS]: success,
  [Types.FIND_BANK_MANAGER_FAIL]: fail,
});
