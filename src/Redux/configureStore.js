import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import bankActions from './BankRedux';
import apiActions from './ApiRedux';
import authActions from './AuthRedux';
// import checkActiveUser from '../Services/Firebase/FirebaseCurrentUser';
import getCurrentUser from '../Services/Firebase/FirebaseCurrentUser';
import { firebaseAuth } from '../Services/Firebase/FirebaseConfig';

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

  firebaseAuth.onAuthStateChanged((user) => {
    if (user) {
      return store.dispatch(authActions.activeUserTrue(user));
    }
    return store.dispatch(authActions.activeUserFalse());
  });

  return store;
};
