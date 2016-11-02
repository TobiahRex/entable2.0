import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Navbar from '../components/Navbar';
import Homepage from '../components/Home';
import BankDetail from '../components/BankDetails/BankDetail';
import BankDetail2 from '../components/BankDetails/BankDetail2';
import BankDetail3 from '../components/BankDetails/BankDetail3';
import BankDetail4 from '../components/BankDetails/BankDetail4';
import BankDetail5 from '../components/BankDetails/BankDetail5';
import BankDetail6 from '../components/BankDetails/BankDetail6';
import BankDetail7 from '../components/BankDetails/BankDetail7';
import Donation from '../components/Donation/Donation';

export default (
  <Route path="/" component={Navbar}>
    <IndexRoute component={Homepage} />
    <Router path="bank" component={BankDetail} />
    <Router path="bank2" component={BankDetail2} />
    <Router path="bank3" component={BankDetail3} />
    <Router path="bank4" component={BankDetail4} />
    <Router path="bank5" component={BankDetail5} />
    <Router path="bank6" component={BankDetail6} />
    <Router path="bank7" component={BankDetail7} />
    <Router path="donation" component={Donation} />
  </Route>
);
