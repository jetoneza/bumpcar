'use strict';

import React from 'react';
import FeedCard from './FeedCard';
import EventActions from '../../actions/EventActions';
import Stores from '../../stores';
import ReactDOM from 'react-dom';

/**
 * Feed Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
    }
  }

  /**
   * To check if this component is mounted
   * @returns {boolean}
   */
  isMounted() {
    try {
      ReactDOM.findDOMNode(this);
      return true;
    } catch (e) {
      return false;
    }
  }

  componentDidMount() {
    EventActions.getEvents();
    Stores.EventsStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    Stores.EventsStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    var events = Stores.EventsStore.getData();
    if (this.isMounted()) {
      this.setState({events});
      setTimeout(() => {
        EventActions.getEvents();
      }, 5000);
    }
  }

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {
    var {events} = this.state;

    if (events.length == 0) {
      return (
          <div className="ui center aligned container event-feed">
            <h2>No event.</h2>
          </div>
      );
    }
    return (
        <div className="feed-component">
          <div className="ui divided items event-feed">
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
