import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './Navigation'

import createStore from './Redux/index'

const store = createStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} router={routes} />
  </Provider>
)
