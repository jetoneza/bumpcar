'use strict'

import CarTracker from './trackers/CarTracker';
import ColorTracker from './trackers/ColorTracker';
import Trackers from '../../constants/Trackers';

var TrackingJS = window.tracking;

class Bumpcar {

  initTracker(tracker) {
    var trackerObject = this._getTrackerByName(tracker.name);
    if (trackerObject) {
      trackerObject = trackerObject.init();
      var task = TrackingJS.track(tracker.element, trackerObject);
      return {
        tracker: trackerObject,
        task
      }
    }
  }

  _getTrackerByName(trackerName) {
    var tracker = null;
    switch (trackerName) {
      case Trackers.COLOR_TRACKER:
        tracker = ColorTracker;
        break;
      case Trackers.CAR_TRACKER:
        tracker = CarTracker;
        break;
    }

    return tracker;
  }
}

export default new Bumpcar();