'use strict';

import React from 'react';

import Header from './partials/Header';

/**
 * Main Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class MainComponent extends React.Component {

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {

    return (
        <div className="main-component">
          <Header />
          <h1>Welcome...</h1>
        </div>
    );
  }
}

/**
 * Declare property types here
 * @type {Object}
 */
MainComponent.propTypes = {};

/**
 * Declare default property values here
 * @type {Object}
 */
MainComponent.defaultProps = {};

export default MainComponent;
