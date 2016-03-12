'use strict';

import React from 'react';
import FeedCard from './FeedCard';
import EventActions from '../../actions/EventActions';
import Stores from '../../stores';

/**
 * Feed Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class Feed extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    EventActions.getEvents();
    Stores.EventsStore.addChangeListener(this._onChange.bind(this));
  }

  compoenentWillUnmount() {
    Stores.EventsStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    var events = Stores.EventsStore.getData();
    this.setState({events})
  }

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {
    var {events} = this.state;
    return (
        <div className="feed-component">
          <div className="ui one stackable cards">
            {events.map((event) => {
              return (
                  <FeedCard key={event.code} event={event}/>
              );
            })}
          </div>
        </div>
    );
  }
}

/**
 * Declare property types here
 * @type {Object}
 */
Feed.propTypes = {};

/**
 * Declare default property values here
 * @type {Object}
 */
Feed.defaultProps = {};

export default Feed;
