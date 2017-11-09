import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage}/>
    </Switch>
  </App>
);