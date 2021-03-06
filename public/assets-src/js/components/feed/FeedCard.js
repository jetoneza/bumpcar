'use strict';

import React from 'react';
import EventsConstants from '../../constants/events';
import _ from 'underscore';
import moment from 'moment';
import {Link} from 'react-router';

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

    var date = moment(event.created_at).fromNow();

    var link = `/event/${event.id}`;

    return (
        <div className="item feed-card" ref="item">
          <div className="content">
            <Link to={link} className="header"
                  onClick={(e) => this.props.handleCardClick(event)}>{event.place.name}</Link>
            <div className="meta">
              <span className="cinema">{date}</span>
            </div>
            <div className="description">
              <p>Detected!</p>
            </div>
            <div className="extra">
              <Link to={link}
                    className="ui right floated primary button view-button">
                View
                <i className="arrow circle right icon"></i>
              </Link>
              {event.violations.map((violation) => {
                var color = this._getColorByKey(violation.type)
                var type = this._stringifyKey(violation.type)

                return (
                    <div key={violation.id} className={`ui label ${color}`}>{type}</div>
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
