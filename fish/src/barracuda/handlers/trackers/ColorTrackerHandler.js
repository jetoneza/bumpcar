'use strict'

import TrackerHandler from './TrackerHandler';
import Trackers from '../../../../../constants/Trackers';

class ColorTrackerHandler extends TrackerHandler {
  constructor(props) {
    super(props);
    this.name = Trackers.COLOR_TRACKER;
  }

  _eventHandler(event) {
    console.log(this.name + ' tracking...');
  }
}

export default ColorTrackerHandler;