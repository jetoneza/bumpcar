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

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {
    var {event} = this.props;
    var type = this._stringifyKey(event.type);

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
              <div className="type">Type: {type}</div>
              <div className="type">Time: {event.date}</div>
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
