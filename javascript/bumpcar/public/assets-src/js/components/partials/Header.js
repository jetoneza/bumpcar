'use strict';

import React from 'react';

/**
 * Header Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class Header extends React.Component {

  _handleButtonClick() {
    window.alert('Coming soon!');
  }

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {
    return (
        <div className="ui container header">
          <div className="ui large secondary inverted pointing menu">
            <a className="active item" onClick={this._handleButtonClick}>Home</a>
            <a className="item" onClick={this._handleButtonClick}>Cars</a>
            <div className="right item">
              <a className="ui inverted button" onClick={this._handleButtonClick}>Explore Junk
                Shop
              </a>
            </div>
          </div>
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
