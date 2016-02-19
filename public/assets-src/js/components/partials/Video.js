'use strict';

import React from 'react';

import Bumpcar from '../../../../../bumpcar/build/bumpcar';
import Files from '../../../../../constants/Files';
import Trackers from '../../../../../constants/Trackers';

/**
 * Main Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class Video extends React.Component {

  componentDidMount() {
    var trackers = [
      {
        element: '#video',
        trackerName: Trackers.CAR_TRACKER
      },
      {
        element: '#video',
        trackerName: Trackers.COLOR_TRACKER
      }
    ];

    Bumpcar.setTrackers(trackers);
    Bumpcar.run();
    Bumpcar.stop();
  }

  /**
   * Returns the component markup
   * @returns {XML}
   */
  render() {
    var videoUrl = Files.directories.VIDEOS + 'video1.mp4';
    return (
        <div className="ui container video-wrapper">
          <div className="ui segments">
            <div className="ui segment video-container">
              <video id="video" className="video" preload autoPlay muted controls>
                <source src={videoUrl} type="video/mp4"/>
              </video>
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
Video.propTypes = {};

/**
 * Declare default property values here
 * @type {Object}
 */
Video.defaultProps = {};

export default Video;
