'use strict';

import React from 'react';

import Files from '../../../../../constants/Files';
import BumpcarHandler from '../../../../../fish/build/barracuda/handlers/BumpcarHandler';
import VideoActions from '../../actions/VideoActions';
import Stores from '../../stores';

/**
 * Main Component
 * @author jet.oneza <jet.oneza@gmail.com>
 */
class Video extends React.Component {

  componentDidMount() {
    VideoActions.getVideoData('video1');
    Stores.VideosDataStore.addChangeListener(this._onChange.bind(this));

    var handler = new BumpcarHandler();
    handler.run();
  }

  compoenentWillUnmount() {
    Stores.VideosDataStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    var data = Stores.VideosDataStore.getData();
    console.log('data:', data);
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
