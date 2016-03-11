'use strict';

import React from 'react';
import FeedCard from './FeedCard';

/**
 * Feed Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class Feed extends React.Component {

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {
    return (
        <div className="feed-component">
          <div className="ui one stackable cards">
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
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
