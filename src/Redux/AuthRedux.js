import { createActions, createReducer } from 'reduxsauce';

const nullFields = {
  uid: null,
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
  lastLogin: null,
  location: null,
  registered: null,
  photoUrl: null,
  setttings: null,
}

const { Types, Creators } = createActions({
  createUserFirebase: ['info'],
  createUserSuccess: ['info'],
  createUserFail: ['error'],
  saveNewUser: ['info'],
  saveNewUserFail: ['error'],
  saveNewUserSuccess: ['credentials'],
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
  refreshToken: null,
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
  lastLogin: null,
  location: null,
  photoUrl: null,
  settings: null,
  error: null,
};

const createUserSuccess = (state, { info }) => ({

})

const saveNewUserSuccess = (state, { user }) => ({
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
  setttings: user.settings,
  error: null,
});

const saveNewUserFail = (state, { error }) =>
({ ...nullFields, error });

const loginSuccess = (state, { user }) => ({
  uid: user.id,
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
  lastLogin: user.lastLogin,
  location: user.location,
  registered: user.registered,
  photoUrl: user.photoUrl,
  setttings: user.settings,
  error: null,
});

const loginFail = (state, { error }) =>
({ ...nullFields, error });

const logoutSuccess = () => ({
  uid: null,
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
  lastLogin: null,
  location: null,
  photoUrl: null,
  settings: null,
  error: null,
});

const logoutFail = (state, { error }) => ({
  uid: state.uid,
  firstName: state.firstName,
  firstName: state.lastName,
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
