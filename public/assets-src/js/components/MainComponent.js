'use strict';

import React from 'react';

import Header from './partials/Header';
import Feed from './feed/Feed';
import Graphs from './graphs/Graphs';

/**
 * Main Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class MainComponent extends React.Component {

  componentDidMount() {
    var tabMenu = this.refs.tabMenu;
    $(tabMenu).children('.item').tab();
  }

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {
    return (
        <div className="main-component">
          <div className="ui container header tabs-wrapper">
            <div className="ui pointing secondary menu compact tab-menu" ref="tabMenu">
              <a className="item active" data-tab="feed">Feed</a>
              <a className="item" data-tab="graphs">Graphs</a>
            </div>
          </div>
          <div className="ui bottom tab active" data-tab="feed">
            <Feed />
          </div>
          <div className="ui bottom tab" data-tab="graphs">
            <Graphs />
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
