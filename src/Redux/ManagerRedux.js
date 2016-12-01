import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  findBankManager: ['managerId'],
  findBankManagerSuccess: ['manager'],
  findBankManagerFail: ['error'],
});

export default Creators;
export const ManagerTypes = Types;
