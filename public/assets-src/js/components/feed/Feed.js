'use strict';

import React from 'react';
import FeedCard from './FeedCard';
import EventActions from '../../actions/EventActions';
import Stores from '../../stores';
import Event from '../events/Event';

/**
 * Feed Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class Feed extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      events: [],
      activeEvent: null,
      showEvent: false
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

  handleCardClick(activeEvent) {
    this.setState({
      activeEvent,
      showEvent: true
    })
  }

  handleBackClick() {
    this.setState({
      activeEvent: null,
      showEvent: false
    });
  }

  _getFeed() {
    var {events} = this.state;
    return (
        <div className="ui divided items event-feed">
          {events.map((event) => {
            return (
                <FeedCard key={event.code} event={event}
                          handleCardClick={this.handleCardClick.bind(this)}/>
            );
          })}
        </div>
    );
  }

  _getEvent() {
    var {activeEvent} = this.state;
    return (
        <Event event={activeEvent} handleBackClick={this.handleBackClick.bind(this)}/>
    );
  }

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {
    var content = this.state.showEvent ? this._getEvent() : this._getFeed();
    return (
        <div className="feed-component">
          {content}
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
