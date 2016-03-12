'use strict';

import React from 'react';
import EventsConstants from '../../constants/events';
import _ from 'underscore';

/**
 * Feed Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class FeedCard extends React.Component {

  _stringifyKey(key) {
    return _.find(EventsConstants, (constant, id) => {
      return id == key;
    });
  }

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {

    var {event} = this.props;

    var type = this._stringifyKey(event.type);

    return (
        <div className="ui card feed-card">
          <div className="content">
            <div className="header">{event.place.name}</div>
            <div className="description">
              <div className="type">Type: {type}</div>
              <div className="time">Time: {event.date}</div>
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
