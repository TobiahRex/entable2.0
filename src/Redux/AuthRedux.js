import { createActions, createReducer } from 'reduxsauce';

const nullFields = {
  uid: null,
  refreshToken: null,
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
  lastLogin: null,
  location: null,
  registered: null,
  photoUrl: null,
  settings: null,
}

const { Types, Creators } = createActions({
  createUserFirebase: ['info'],
  createUserSuccess: ['user'],
  createUserFail: ['error'],
  saveNewUser: ['info'],
  saveNewUserFail: ['error'],
  saveNewUserSuccess: ['user'],
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
  ...nullFields,
  error: null,
};

const userSuccess = (state, { user }) => ({
  uid: user.id,
  refreshToken: state.user.refreshToken,
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
  uid: state.uid,
  refreshToken: state.refreshToken,
  firstName: state.firstName,
  lastName: state.lastName,
  email: state.email,
  phone: state.phone,
  lastLogin: state.lastLogin,
  location: state.location,
  photoUrl: state.photoUrl,
  settings: state.settings,
  error,
});

const loginFail = (state, { error }) => ({
  uid: state.uid,
  refreshToken: state.refreshToken,
  firstName: state.firstName,
  lastName: state.lastName,
  email: state.email,
  phone: state.phone,
  lastLogin: state.lastLogin,
  location: state.location,
  photoUrl: state.photoUrl,
  settings: state.settings,
  error,
});

export const userReducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_USER_SUCCESS]: userSuccess,
  [Types.CREATE_USER_FAIL]: userFail,
  [Types.SAVE_NEW_USER_SUCCESS]: userSuccess,
  [Types.SAVE_NEW_USER_FAIL]: userFail,
  [Types.LOGIN_SUCCESS]: userSuccess,
  [Types.LOGIN_FAIL]: loginFail,
  [Types.LOGOUT_SUCCESS]: logoutSuccess,
  [Types.LOGOUT_FAIL]: logoutFail,
});
