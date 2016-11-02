import { combineReducers } from 'redux';
import rootSaga from '../Sagas';
import configureStore from './configureStore';
import { bankReducer as bank } from './BankRedux';

export default () => {
  const rootReducer = combineReducers({
    bank,
  });
  return configureStore(rootReducer, rootSaga);
};
