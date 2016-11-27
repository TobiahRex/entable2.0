import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Navbar from '../Components/Navbar';
import Homepage from '../Containers/Home';
import BankDetail from '../Components/Bank/BankDetail';
import BankExample from '../Components/Bank/BankExample';
import LoginPage from '../Containers/Login/loginContainer';
import RegisterPage from '../Containers/Register/registerContainer';
import DonorPage from '../Containers/Donor/DonatePg';

import donateBank from '../Components/Donation/donateBank';
import donateGen from '../Components/Donation/donateGen';
import flexBoxTest from '../Components/flexBoxTest';


export default (
  <Route path="/" component={Navbar}>
    <IndexRoute component={Homepage} />
    <Router path="bank/:id" component={BankDetail} />
    <Router path="example" component={BankExample} />
    <Router path="login" component={LoginPage} />
    <Router path="register" component={RegisterPage} />
    <Router path="donor_account" component={DonorPage} />
    {/* <Router path="manager_account" component={ManagerPage} /> */}
    <Router path="sponsor" component={donateGen} />
    <Router path="donation/:id" component={donateBank} />
    <Router path="flex" component={flexBoxTest} />
  </Route>
);
