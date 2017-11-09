import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Routes from '../routes.js';
import HomePage from './HomePage.js';

//<Routes/>
export default function Root({ store, history }) {
  return (
  	<Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes/>
      </ConnectedRouter>
  	</Provider>
  );
}
