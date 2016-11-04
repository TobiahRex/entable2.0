import { combineReducers } from 'redux';
import rootSaga from '../Sagas';
import configureStore from './configureStore';

import { apiReducer as api } from './ApiRedux';
import { bankReducer as bank } from './BankRedux';

export default () => {
  const rootReducer = combineReducers({
    api,
    bank,
  });
  return configureStore(rootReducer, rootSaga);
};
