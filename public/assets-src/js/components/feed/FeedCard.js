'use strict';

import React from 'react';

/**
 * Feed Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class FeedCard extends React.Component {

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {
    return (
        <div className="ui card feed-card">
          <div className="content">
            <div className="header">Violation</div>
            <div className="description">
              CM Recto St cor Roxas Ave PTZ (2015-03-25)
            </div>
          </div>
          <div className="ui bottom attached button view-button">
            View
            <i className="arrow circle right icon"></i>
          </div>
        </div>
    );
  }
}

/**
 * Declare property types here
 * @type {Object}
 */
FeedCard.propTypes = {};

/**
 * Declare default property values here
 * @type {Object}
 */
FeedCard.defaultProps = {};

export default FeedCard;
