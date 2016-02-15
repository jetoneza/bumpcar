'use strict';

import React from 'react';

/**
 * Header Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class Header extends React.Component {

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {

    return (
        <div className="header">
          <h1>BumpCar</h1>
        </div>
    );
  }
}

/**
 * Declare property types here
 * @type {Object}
 */
Header.propTypes = {};

/**
 * Declare default property values here
 * @type {Object}
 */
Header.defaultProps = {};

export default Header;
