'use strict'

import CarTracker from './trackers/CarTracker';
import ColorTracker from './trackers/ColorTracker';
import Trackers from '../../constants/Trackers';

var TrackingJS = window.tracking;

class Bumpcar {

  constructor() {
    this.trackers = [];
    this.trackerTasks = [];
    this.logs = false;
  }

  init() {
    if (this.trackers.length == 0) {
      console.log('Please set trackers.');
      return;
    }

    this.trackers.map((trackerObject) => {
      var {tracker} = trackerObject;
      tracker.on('track', (event) => {
        if (this.logs) {
          console.log(trackerObject.name + ' tracking...');
        }
      });
    });
  }

  setTrackers(trackers = []) {
    trackers.map((tracker) => {
      var trackerObject = this._getTrackerByName(tracker.trackerName);
      if (trackerObject) {
        this.trackers.push({
          element: tracker.element,
          name: tracker.trackerName,
          tracker: trackerObject.init()
        });
      }
    });
  }

  run() {
    this.init()
    this.trackers.map((trackerObject) => {
      var {element, tracker} = trackerObject;
      var task = TrackingJS.track(element, tracker);

      var trackerTask = {
        name: tracker.name,
        task
      }

      this.trackerTasks.push(trackerTask)
    });
  }

  stop() {
    this.trackerTasks.map((taskObject) => {
      taskObject.task.stop();
    });
  }

  runTracker(trackerName) {
    //TODO run individual tracker
  }

  stopTracker(trackerName) {
    //TODO stop individual tracker
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

  enableLogs() {
    this.logs = true;
  }

  disableLogs() {
    this.logs = false;
  }
}

export default new Bumpcar();