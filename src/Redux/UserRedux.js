import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createReducer({
  loginUserFail: ['user'],
  loginUserSuccess: [],
  logoutUserFail: [''],
  logoutUserSuccess: null,
  logoutUser
  uid: ['id'],
  username: ['username'],
  email: ['email'],
  lastLogin: ['login'],
  location: ['location'],
  locale: ['locale'],
  photoUrl: ['url'],
  settings: ['settings'],
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
};


const received = (state, { user }) => ({
  uid: user.id,
  username: user.username,
  email: user.email,
  lastLogin: user.lastLogin,
  location,
  registered: user.registered,
  photoUrl: user.photoUrl,
  settings,
});

const logout = () => ({
  uid: null,
  username: null,
  email: null,
  lastLogin: null,
  location: null,
  photoUrl: null,
  settings: null,
});

export const userReducer = createReducer(INITIAL_STATE, {
  [Types.USER_RECEIVED]: received,
  [Types.LOGOUT_SUCCESS]: logout,
});
