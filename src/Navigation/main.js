import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Navbar from '../Components/Navbar';
import Homepage from '../Containers/Home';
import BankDetail from '../Components/BankDetails/BankDetail';
import Donation from '../Components/Donation/Donation';

export default (
  <Route path="/" component={Navbar}>
    <IndexRoute component={Homepage} />
    <Router path="bank/:id" component={BankDetail} />
    <Router path="donation" component={Donation} />
    {/* <Router path="bank2" component={BankDetail2} />
      <Router path="bank3" component={BankDetail3} />
      <Router path="bank4" component={BankDetail4} />
      <Router path="bank5" component={BankDetail5} />
      <Router path="bank6" component={BankDetail6} />
      <Router path="bank7" component={BankDetail7} />
    */}
    </Route>
);
