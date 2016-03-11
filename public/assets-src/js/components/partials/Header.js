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
        <div className="ui inverted vertical left aligned segment main-header">
          <h1 className="company ui header">Bumpcar</h1>
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
