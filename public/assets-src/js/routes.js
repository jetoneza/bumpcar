'use strict';

import React from 'react';
import {Route} from 'react-router';
import MainComponent from './components/MainComponent';
import SimulationComponent from './components/simulation/SimulationComponent';

module.exports = [
  <Route path="/" component={MainComponent}/>,
  <Route path="/simulation" component={SimulationComponent}/>
];