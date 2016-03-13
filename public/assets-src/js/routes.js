'use strict';

import React from 'react';
import {Route} from 'react-router';
import Outer from './components/Outer';
import MainComponent from './components/MainComponent';
import Event from './components/events/Event';
import SimulationComponent from './components/simulation/SimulationComponent';

module.exports = [
  <Route component={Outer}>
    <Route path="/" component={MainComponent}/>
    <Route path="/event/:id" component={Event}/>
  </Route>,
  <Route path="/simulation" component={SimulationComponent}/>
];