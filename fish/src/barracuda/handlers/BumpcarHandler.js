'use strict'

import Bumpcar from '../../../../bumpcar/build/Bumpcar';
import CarTrackerHandler from './trackers/CarTrackerHandler';
import ColorTrackerHandler from './trackers/ColorTrackerHandler';

class BumpcarHandler {

  constructor() {
    this.carTrackerHandler = new CarTrackerHandler();
    this.carTrackerHandler.setElement('#video');
    this.carTrackerHandler.setTracker(Bumpcar.initTracker(this.carTrackerHandler.toObject()));

    this.colorTrackerHandler = new ColorTrackerHandler()
    this.colorTrackerHandler.setElement('#video');
    this.colorTrackerHandler.setTracker(Bumpcar.initTracker(this.colorTrackerHandler.toObject()));
  }

  run() {
    this.carTrackerHandler.handle();
    this.colorTrackerHandler.handle();
  }

}

export default BumpcarHandler;