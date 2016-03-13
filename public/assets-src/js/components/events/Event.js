'use strict';

import React from 'react';
import Video from '../partials/Video';
import Maps from '../maps/Maps';
import ViolationCard from './ViolationCard';
import moment from 'moment';

/**
 * Event Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class Event extends React.Component {

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {
    var {event} = this.props;

    var date = moment(event.date).fromNow();

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
              <div className="time">{date}</div>
              <div className="ui cards">
                {event.detected.map((violation) => {
                  return (
                      <ViolationCard key={violation.type} violation={violation} date={event.date}/>
                  );
                })}
              </div>
            </div>
            <Maps place={event.place}/>
          </div>
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
