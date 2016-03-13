'use strict';

window.GoogleMaps = require('google-maps');

import routes from './routes';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';

ReactDOM.render((
    <Router history={createHistory()} routes={routes}/>
), document.getElementById('main-component'));

