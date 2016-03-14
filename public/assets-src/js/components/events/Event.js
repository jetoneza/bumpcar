'use strict';

import React from 'react';
import Video from '../partials/Video';
import Maps from '../maps/Maps';
import ViolationCard from './ViolationCard';
import Stores from '../../stores';
import moment from 'moment';
import {Link} from 'react-router';

/**
 * Event Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class Event extends React.Component {

  constructor(props) {
    super(props);

    var event = Stores.EventsStore.getEvent(props.params.id);

    this.state = {
      event
    }
  }

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {
    var {event} = this.state;

    var date = moment(event.created_at).fromNow();

    return (
        <div className="event-component">
          <Link to="/" className="ui button back-button">
            <i className="arrow circle left icon"></i>
            Back
          </Link>
          <div className="event-content">
            <div className="ui grid">
              <div className="twelve wide column">
                <Video fileUrl={event.file_url}/>
                <div className="ui violet segment meta">
                  <h1 className="place">{event.place.name}</h1>
                  <div className="time">{date}</div>
                </div>
              </div>
              <div className="four wide column">
                <div className="ui cards">
                  {event.violations.map((violation) => {
                    return (
                        <ViolationCard key={violation.type} violation={violation}
                                       date={event.created_at}/>
                    );
                  })}
                </div>
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
