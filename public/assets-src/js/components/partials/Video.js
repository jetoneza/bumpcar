'use strict';

import React from 'react';

/**
 * Main Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class Video extends React.Component {

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {
    var {fileUrl} = this.props;
    return (
        <div className="video-wrapper">
          <div className="video-container">
            <video id="video" className="video" preload autoPlay muted controls>
              <source src={fileUrl} type="video/mp4"/>
            </video>
          </div>
        </div>
    );
  }
}

/**
 * Declare property types here
 * @type {Object}
 */
Video.propTypes = {};

/**
 * Declare default property values here
 * @type {Object}
 */
Video.defaultProps = {};

export default Video;
