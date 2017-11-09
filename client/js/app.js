import React, { Component } from 'react';
import { render } from 'react-dom';
import { configureStore }from './store';
import { createBrowserHistory } from 'history';
import Root from './containers/Root';

//manage store on the app level
const store = configureStore();
const history = createBrowserHistory();

//essential reading
// https://gaearon.github.io/react-hot-loader/getstarted/#step-2-of-3-using-hmr-to-replace-the-root-component
// http://redux.js.org/docs/advanced/UsageWithReactRouter.html
render(<Root store={store} history={history} />, document.getElementById('app'));
