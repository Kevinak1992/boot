import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from 'components/app';

require( 'normalize.css/normalize.css' );
require( './style/app.styl' );

const history = createBrowserHistory();

// Render the main component into the dom
ReactDOM.render( (
  <Router history={ history }>
    <Route path="/" component={ App } />
  </Router>
), document.getElementById( 'app' ) );
