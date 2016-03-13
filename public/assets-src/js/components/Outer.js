'use strict';

import React from 'react';
import Header from './partials/Header';

/**
 * Outer Wrapper
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class Outer extends React.Component {

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {
    return (
        <div className="outer">
          <Header title="Bumpcar" path="/simulation"/>
          {this.props.children}
        </div>
    );

  }
}

/**
 * Declare property types here
 * @type {Object}
 */
Outer.propTypes = {};

/**
 * Declare default property values here
 * @type {Object}
 */
Outer.defaultProps = {};

export default Outer;
