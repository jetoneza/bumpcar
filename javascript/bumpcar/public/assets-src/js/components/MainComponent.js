'use strict';

import React from 'react';

import Header from './partials/Header';

/**
 * Main Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class MainComponent extends React.Component {

  componentDidMount() {
    var {button} = this.refs;
    $(button).transition('tada');
  }

  _handleButtonClick() {
    window.alert('Coming soon!');
  }

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {

    var style = {
      height: '100vh',
      'marginTop': '100px',
    }

    return (
        <div className="main-component">
          <div className="ui inverted vertical masthead center aligned segment">
            <Header />
          </div>
          <div className="ui text container" style={style}>
            <h1 className="ui huge header">
              Bumpcar
            </h1>
            <h2>Watch very intense crashes. Not for the faint hearted. Parental guidanace is
              adviced.</h2>
            <div className="ui huge red button" ref="button" onClick={this._handleButtonClick}>
              +18 ENTER <i
                className="right arrow icon"></i>
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
MainComponent.propTypes = {};

/**
 * Declare default property values here
 * @type {Object}
 */
MainComponent.defaultProps = {};

export default MainComponent;
