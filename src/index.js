import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Navbar from './components/Navbar';
import Homepage from './components/Home';
import BankDetail from './components/BankDetail';
import BankDetail2 from './components/BankDetail2';
import BankDetail3 from './components/BankDetail3';
import BankDetail4 from './components/BankDetail4';
import BankDetail5 from './components/BankDetail5';
import BankDetail6 from './components/BankDetail6';
import BankDetail7 from './components/BankDetail7';
import Donation from './components/Donation';

render(
  <Router history={browserHistory}>
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
    </Route>
  </Router>,
  document.getElementById('root')
);
