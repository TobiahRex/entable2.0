import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  registerUser: ['info'],
  registerFail: ['error'],
  registerSuccess: ['credentials'],
  loginUser: ['credentials'],
  loginUserFail: ['error'],
  loginUserSuccess: ['user'],
  logoutUser: null,
  logoutUserFail: ['error'],
  logoutUserSuccess: null,
});

export const AuthTypes = Types;
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

const registerSuccess = (state, { user }) => ({
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

const registerFail = (state, { error }) => ({
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
  error: null,
});

const logoutFail = (state, { error }) => ({
  uid: state.uid,
  username: state.username,
  email: state.email,
  lastLogin: state.lastLogin,
  location: state.location,
  photoUrl: state.photoUrl,
  settings: state.settings,
  error,
});

export const userReducer = createReducer(INITIAL_STATE, {
  [Types.REGISTER_SUCCESS]: registerSuccess,
  [Types.REGISTER_FAIL]: registerFail,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAIL]: loginFail,
  [Types.LOGOUT_SUCCESS]: logoutSuccess,
  [Types.LOGOUT_FAIL]: logoutFail,
});
