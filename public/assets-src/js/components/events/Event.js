'use strict';

import React from 'react';
import EventsConstants from '../../constants/events';
import _ from 'underscore';
import Video from '../partials/Video';
import Maps from '../maps/Maps';

/**
 * Event Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class Event extends React.Component {

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
        <div className="event-component">
          <button className="ui button back-button" onClick={this.props.handleBackClick}>
            <i className="arrow circle left icon"></i>
            Back
          </button>
          <div className="event-content">
            <Video fileUrl={event.fileUrl}/>
            <div className="meta">
              <h1 className="place">{event.place.name}</h1>
              <div className="time">{event.date}</div>
              <div className={`ui label ${color}`}>{type}</div>
              {event.violations.map((violation) => {

                color = this._getColorByKey(violation)
                type = this._stringifyKey(violation)

                return (
                    <div key={violation} className={`ui label ${color}`}>{type}</div>
                );
              })}
            </div>
            <Maps place={event.place}/>
          </div>
          <button className="ui button back-button" onClick={this.props.handleBackClick}>
            <i className="arrow circle left icon"></i>
            Back
          </button>
        </div>
    );
  }
}

/**
 * Declare property types here
 * @type {Object}
 */
Event.propTypes = {};

/**
 * Declare default property values here
 * @type {Object}
 */
Event.defaultProps = {};

export default Event;
