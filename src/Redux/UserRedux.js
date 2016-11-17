import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createReducer({
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
}


const received = (state, { user, location, settings }) => ({
  uid: action.user.id,
  username: action.user.username,
  email: action.user.email,
  lastLogin: action.user.lastLogin,
  location: action.location,
  registered: action.user.registered,
  photoUrl: action.user.photoUrl,
  settings: action.settings
})

const logout = (state) => ({
  uid: null,
  username: null,
  email: null,
  lastLogin: null,
  location: null,
  photoUrl: null,
  settings: null
});

const ACTION_HANDLERS = {
  [Types.USER_RECEIVED]: received,
  [Types.LOGOUT_SUCCESS]: logout
}

export const userReducer = createReducer(INITIAL_STATE, {

};
