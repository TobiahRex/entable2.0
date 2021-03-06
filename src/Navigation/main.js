import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Navbar from '../Components/Navbar';
import Homepage from '../Containers/Home';
import BankDetail from '../Components/Bank/BankDetail';
import BankExample from '../Components/Bank/BankExample';
import LoginPage from '../Containers/Login/loginContainer';
import RegisterPage from '../Containers/Register/registerContainer';
import DonorPage from '../Containers/Donor/DonatePg';
import ManagerPage from '../Containers/Manager/managerContainer';

import GuestDonation from '../Components/Donation/GuestDonation';
import GeneralDonation from '../Components/Donation/GeneralDonation';
import flexBoxTest from '../Components/flexBoxTest';


export default (
  <Route path="/" component={Navbar}>
    <IndexRoute component={Homepage} />
    <Router path="bank/:id" component={BankDetail} />
    <Router path="example" component={BankExample} />
    <Router path="login" component={LoginPage} />
    <Router path="register" component={RegisterPage} />
    <Router path="donor/:id" component={DonorPage} />
    <Router path="manager/:id" component={ManagerPage} />
    <Router path="sponsor" component={GeneralDonation} />
    <Router path="donation/:id" component={GuestDonation} />
    <Router path="flex" component={flexBoxTest} />
  </Route>
);
