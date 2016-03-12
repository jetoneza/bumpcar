'use strict';

import React from 'react';
import EventsConstants from '../../constants/events';
import _ from 'underscore';

/**
 * Feed Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class FeedCard extends React.Component {

  componentDidMount() {
    var {item} = this.refs;
    $(item).transition({
      animation: 'fly in',
      duration: '1s',
    });
  }

  _stringifyKey(key) {
    return _.find(EventsConstants, (constant, id) => {
      return id == key;
    });
  }

  _getColorByKey(key) {
    var color = '';

    switch (key) {
      case 'collision':
        color = 'red';
        break;
      case 'over_speeding':
        color = 'violet';
        break;
      case 'wrong_lane':
        color = 'teal';
        break;
      case 'beating_red_light':
        color = 'orange'
    }

    return color;
  }

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {

    var {event} = this.props;

    var type = this._stringifyKey(event.type);

    var color = this._getColorByKey(event.type);

    return (
        <div className="item feed-card" ref="item">
          <div className="content">
            <a className="header"
               onClick={(e) => this.props.handleCardClick(event)}>{event.place.name}</a>
            <div className="meta">
              <span className="cinema">{event.date}</span>
            </div>
            <div className="description">
              <p>{type} detected!</p>
            </div>
            <div className="extra">
              <div className="ui right floated primary button view-button"
                   onClick={(e) => this.props.handleCardClick(event)}>
                View
                <i className="arrow circle right icon"></i>
              </div>
              <div className={`ui label ${color}`}>{type}</div>
              {event.violations.map((violation) => {

                color = this._getColorByKey(violation)
                type = this._stringifyKey(violation)

                return (
                    <div key={violation} className={`ui label ${color}`}>{type}</div>
                );
              })}
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
FeedCard.propTypes = {};

/**
 * Declare default property values here
 * @type {Object}
 */
FeedCard.defaultProps = {};

export default FeedCard;
