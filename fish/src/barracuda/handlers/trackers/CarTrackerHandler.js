'use strict'

import TrackerHandler from './TrackerHandler';
import Trackers from '../../../../../constants/Trackers';

class CarTrackerHandler extends TrackerHandler {
  constructor(props) {
    super(props);
    this.name = Trackers.CAR_TRACKER;
  }

  _eventHandler(event) {
    console.log(this.name + ' tracking...');
  }
}

export default CarTrackerHandler;