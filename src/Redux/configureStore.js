import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import bankActions from './BankRedux';
import apiActions from './ApiRedux';
import authActions from './AuthRedux';

export default (rootReducer, rootSaga) => {
  const middlewares = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware();

  middlewares.push(sagaMiddleware);
  middlewares.push(createLogger());

  enhancers.push(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : x => x
  );

  const store = createStore(rootReducer, compose(...enhancers));
  sagaMiddleware.run(rootSaga);

  store.dispatch(bankActions.getAllBanks());
  store.dispatch(apiActions.fetching());
  store.dispatch(authActions.getActiveUser());
  return store;
};
