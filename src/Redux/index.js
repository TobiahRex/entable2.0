import { combineReducers } from 'redux';
import rootSaga from '../Sagas';
import configureStore from './configureStore';

import { apiReducer as api } from './ApiRedux';
import { bankReducer as bank } from './BankRedux';
import { twilioReducer as twilio } from './TwilioRedux';

export default () => {
  const rootReducer = combineReducers({
    api,
    twilio,
    bank,
  });
  return configureStore(rootReducer, rootSaga);
};
