'use strict';

import React from 'react';

import Header from './partials/Header';
import Video from './partials/Video';

/**
 * Main Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class MainComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showVideo: false
    }
  }

  componentDidMount() {
    var {button} = this.refs;
    $(button).transition('tada');
  }

  _handleButtonClick() {
    this.setState({showVideo: true});
  }

  _getHeroContent() {
    return (
        <div className="ui text container hero">
          <h1 className="ui huge header">
            Bumpcar
          </h1>
          <h2>Watch very intense crashes. Not for the faint hearted. Parental guidanace is
            adviced.</h2>
          <div className="ui huge red button" ref="button"
               onClick={this._handleButtonClick.bind(this)}>
            +18 ENTER <i
              className="right arrow icon"></i>
          </div>
        </div>
    );
  }

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {

    var content = this.state.showVideo ? <Video /> : this._getHeroContent();

    return (
        <div className="main-component">
          <div className="ui inverted vertical masthead center aligned segment">
            <Header />
          </div>

          {content}

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
