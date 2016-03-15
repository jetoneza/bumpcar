'use strict';

import React from 'react';
import BarGraph from './BarGraph';

/**
 * Graph Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class Graphs extends React.Component {

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {
    return (
        <div className="ui center aligned container graphs-component">
          <h1>Graphs</h1>
          <BarGraph />
        </div>
    );
  }
}

/**
 * Declare property types here
 * @type {Object}
 */
Graphs.propTypes = {};

/**
 * Declare default property values here
 * @type {Object}
 */
Graphs.defaultProps = {};

export default Graphs;
