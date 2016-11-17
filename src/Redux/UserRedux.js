import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  loginUser: ['credentials'],
  loginUserFail: ['credentials'],
  loginUserSuccess: ['user'],
  logoutUser: null,
  logoutUserFail: ['error'],
  logoutUserSuccess: null,
});

export const UserTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  uid: null,
  username: null,
  email: null,
  lastLogin: null,
  location: null,
  photoUrl: null,
  settings: null,
  error: null,
};


const loginSuccess = (state, { user }) => ({
  uid: user.id,
  username: user.username,
  email: user.email,
  lastLogin: user.lastLogin,
  location: user.location,
  registered: user.registered,
  photoUrl: user.photoUrl,
  setttings: user.settings,
  error: null,
});

const loginFail = (state, { error }) => ({
  uid: null,
  username: null,
  email: null,
  lastLogin: null,
  location: null,
  registered: null,
  photoUrl: null,
  setttings: null,
  error,
});

const logoutSuccess = () => ({
  uid: null,
  username: null,
  email: null,
  lastLogin: null,
  location: null,
  photoUrl: null,
  settings: null,
});

export const userReducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAIL]: loginFail,
  [Types.LOGOUT_SUCCESS]: logoutSuccess,
  [Types.LOGOUT_FAIL]: logoutFail,
});
