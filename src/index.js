import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './Navigation/main';

import createStore from './Redux/index';

console.log('process.env.BASE_URL: ', process.env.BASE_URL);

const store = createStore();
render(
  <Provider store={store}>
    <Router history={browserHistory} router={routes} />
  </Provider>,
  document.getElementById('root')
);
