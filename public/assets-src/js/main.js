'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './components/MainComponent';

window.GoogleMaps = require('google-maps');

ReactDOM.render(<MainComponent />, document.getElementById('main-component'));
