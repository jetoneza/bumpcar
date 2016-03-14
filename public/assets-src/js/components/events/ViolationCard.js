'use strict';

import React from 'react';
import EventsConstants from '../../constants/events';
import _ from 'underscore';
import cx from 'classnames';

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

    var labelColor = violation.speed > 30 ? 'red' : 'green';

    var speedCx = cx({
      ui: true,
      header: true,
      speed: true,
      [labelColor]: true
    });

    return (
        <div className={`ui ${color} card violation-card`}>
          <div className="ui centered small image">
            <img src={violation.file_url}/>
          </div>
          <div className="content">
            <div className={`ui ${color} ribbon label`}>
              {type}
            </div>
            <div className="meta">
              <h5 className="time">Time: {violation.created_at}</h5>
              <h5 className={speedCx}>Speed: {violation.speed} kph</h5>
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
ViolationCard.propTypes = {};

/**
 * Declare default property values here
 * @type {Object}
 */
ViolationCard.defaultProps = {};

export default ViolationCard;
