'use strict';

import React from 'react';
import EventsConstants from '../../constants/events';
import _ from 'underscore';

/**
 * ViolationCard Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class ViolationCard extends React.Component {

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
    var {violation, date} = this.props;

    var type = this._stringifyKey(violation.type);
    var color = this._getColorByKey(violation.type);

    return (
        <div className="ui card">
          <div className="image">
            <img src={violation.fileUrl}/>
          </div>
          <div className="content">
            <a className="header">{type}</a>
            <div className="meta">
              <span className="date">{date}</span>
            </div>
          </div>
          <div className="extra content">
            <div className={`ui label ${color}`}>{type}</div>
          </div>
        </div>
    );
  }
}

/**
 * Declare property types here
 * @type {Object}
 */
ViolationCard.propTypes = {};

/**
 * Declare default property values here
 * @type {Object}
 */
ViolationCard.defaultProps = {};

export default ViolationCard;
