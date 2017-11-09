import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, routerReducer } from 'react-router-redux';

import rootSagas from '../sagas';
import rootReducer from '../reducers';

// const router = routerMiddleware(history);
const reducer = combineReducers({ rootReducer, routing: routerReducer });
const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = {}, history) => {

  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history)
  ];

  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

  const store = createStoreWithMiddleware(reducer, initialState);
  sagaMiddleware.run(rootSagas);
  return store;
};

export { configureStore };