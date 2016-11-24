import { createActions, createReducer } from 'reduxsauce';

const nullFields = {
  active: false,
  _id: null,
  uid_firebase: null,
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
  lastLogin: null,
  location: null,
  registered: null,
  photoUrl: null,
  settings: null,
};

const { Types, Creators } = createActions({
  activeUserTrue: ['user'],
  activeUserFalse: null,
  getActiveUserSuccess: ['user'],
  getActiveUserFail: ['error'],
  createUserFirebase: ['info'],
  createUserSuccess: ['user'],
  createUserFail: ['error'],
  saveNewUser: ['info'],
  saveNewUserFail: ['error'],
  saveNewUserSuccess: ['user'],
  loginUser: ['credentials'],
  loginUserSuccess: ['user'],
  loginUserFail: ['error'],
  logoutUser: null,
  logoutUserFail: ['error'],
  logoutUserSuccess: null,
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  ...nullFields,
  error: null,
};

const userSuccess = (state, { user }) => ({
  active: true,
  _id: user._id,
  uid_firebase: user.uid_firebase,
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
  phone: user.phone,
  lastLogin: user.lastLogin,
  location: user.location,
  registered: user.registered,
  photoUrl: user.photoUrl,
  settings: user.settings,
  error: null,
});
const userFail = (state, { error }) => ({ ...nullFields, error });

const logoutSuccess = () => ({ ...INITIAL_STATE });
const logoutFail = (state, { error }) => ({
  active: state.user.active,
  _id: state.user._id,
  uid_firebase: state.user.uid_firebase,
  refreshToken: state.user.refreshToken,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  email: state.user.email,
  phone: state.user.phone,
  lastLogin: state.user.lastLogin,
  location: state.user.location,
  photoUrl: state.user.photoUrl,
  settings: state.user.settings,
  error,
});

const loginFail = (state, { error }) => ({
  active: state.user.active,
  _id: state.user._id,
  uid_firebase: state.user.uid_firebase,
  refreshToken: state.user.refreshToken,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  email: state.user.email,
  phone: state.user.phone,
  lastLogin: state.user.lastLogin,
  location: state.user.location,
  photoUrl: state.user.photoUrl,
  settings: state.user.settings,
  error,
});

export const userReducer = createReducer(INITIAL_STATE, {
  [Types.ACTIVE_USER_FALSE]: userFail,
  [Types.GET_ACTIVE_USER_SUCCESS]: userSuccess,
  [Types.GET_ACTIVE_USER_FAIL]: userFail,
  [Types.CREATE_USER_SUCCESS]: userSuccess,
  [Types.CREATE_USER_FAIL]: userFail,
  [Types.SAVE_NEW_USER_SUCCESS]: userSuccess,
  [Types.SAVE_NEW_USER_FAIL]: userFail,
  [Types.LOGIN_USER_SUCCESS]: userSuccess,
  [Types.LOGIN_USER_FAIL]: loginFail,
  [Types.LOGOUT_USER_SUCCESS]: logoutSuccess,
  [Types.LOGOUT_USER_FAIL]: logoutFail,
});
