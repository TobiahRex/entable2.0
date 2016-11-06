import { combineReducers } from 'redux';
import rootSaga from '../Sagas';
import configureStore from './configureStore';

import { apiReducer as api } from './ApiRedux';
import { bankReducer as bank } from './BankRedux';
import { twilioReducer as twilio } from './TwilioRedux';
import { donationReducer as donation } from './DonationRedux';

export default () => {
  const rootReducer = combineReducers({
    api,
    donation,
    twilio,
    bank,
  });
  return configureStore(rootReducer, rootSaga);
};
