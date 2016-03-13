'use strict';

import React from 'react';
import Header from '../partials/Header';

/**
 * Simulation Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class SimulationComponent extends React.Component {

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {
    return (
        <div className="simulation-component">
          <Header title="Simulation" path="/"/>
        </div>
    );
  }
}

/**
 * Declare property types here
 * @type {Object}
 */
SimulationComponent.propTypes = {};

/**
 * Declare default property values here
 * @type {Object}
 */
SimulationComponent.defaultProps = {};

export default SimulationComponent;
