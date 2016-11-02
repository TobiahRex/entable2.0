import { createActions, createReducer } from 'reduxsauce';

// ------- Types & Creators ------- //
const { Types, Creators } = createActions({
  fetching: null,
  apiFail: null,
  apiSuccess: null,
});

export const ApiTypes = Types;
export default Creators;

// ------- Initial State ------- //
export const INITIAL_STATE = {
  fetching: null,
  count: 0,
  error: false,
  success: false,
  message: '',
};

// ------- Response Actions ------- //
const success = state => ({
  fetching: false,
  count: state.fetching - 1,
  error: false,
  success: true,
});

const fail = state => ({
  fetching: false,
  count: state.fetching - 1,
  success: false,
  error: true,
});

const fetching = state => ({
  fetching: true,
  count: state.fetching + 1,
  error: false,
});

// ------- create Reducer ------- //
export const apiReducer = createReducer(INITIAL_STATE, {
  [Types.API_FAIL]: fail,
  [Types.API_SUCCESS]: success,
  [Types.FETCHING]: fetching,
});
