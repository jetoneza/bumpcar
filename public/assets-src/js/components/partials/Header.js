'use strict';

import React from 'react';
import {Link} from 'react-router';

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
    var {title, path} = this.props;
    return (
        <div className="ui inverted vertical left aligned segment main-header">
          <Link to={path} className="company ui header">{title}</Link>
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
