import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';

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

  return store;
};
