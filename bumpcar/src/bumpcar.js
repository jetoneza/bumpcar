'use strict'

import CarTracker from './trackers/CarTracker';

var TrackingJS = window.tracking;

class Bumpcar {

  constructor() {
    this.trackerTask = null;
  }

  init() {
    console.log('Initialize...');

    var carTracker = CarTracker;

    carTracker.on('track', (event) => {
      console.log('tracking...');
    });

    this.trackerTask = TrackingJS.track('#video', carTracker);
  }

  stopTracker() {
    this.trackerTask.stop();
  }

  runTracker() {
    this.trackerTask.run();
  }
}

export default new Bumpcar();