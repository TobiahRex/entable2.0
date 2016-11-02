import React from 'react';
import { Route, IndexRoute } from 'react-router';

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
      <Route path="bank" component={BankDetail} />
      <Route path="bank2" component={BankDetail2} />
      <Route path="bank3" component={BankDetail3} />
      <Route path="bank4" component={BankDetail4} />
      <Route path="bank5" component={BankDetail5} />
      <Route path="bank6" component={BankDetail6} />
      <Route path="bank7" component={BankDetail7} />
      <Route path="donation" component={Donation} />
    </Route>,
  document.getElementById('root')
);
