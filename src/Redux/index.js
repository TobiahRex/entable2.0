import { combineReducers } from 'redux';
import rootSaga from '../Sagas';
import configureStore from './configureStore';

import { userReducer as user } from './AuthRedux';
import { apiReducer as api } from './ApiRedux';
import { bankReducer as bank } from './BankRedux';
import { twilioReducer as twilio } from './TwilioRedux';
import { donationReducer as donation } from './DonationRedux';
import { managerReducer as manager } from './ManagerRedux';

export default () => {
  const rootReducer = combineReducers({
    user,
    manager,
    api,
    donation,
    twilio,
    bank,
  });
  return configureStore(rootReducer, rootSaga);
};
