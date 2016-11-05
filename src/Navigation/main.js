import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Navbar from '../Components/Navbar';
import Homepage from '../Containers/Home';
import BankDetail from '../Components/Bank/BankDetail';
import donateBank from '../Components/Donation/donateBank';
import donateGen from '../Components/Donation/donateGen';

export default (
  <Route path="/" component={Navbar}>
    <IndexRoute component={Homepage} />
    <Router path="bank/:id" component={BankDetail} />
    {/* <Router path="bank/example" component={BankExample} /> */}
    <Router path="donation" component={donateGen} />
    <Router path="donation/:id" component={donateBank} />
  </Route>
);
