/**
 * Car Tracker Class
 * @author jet.oneza <jet.oneza@gmail.com>
 */
var TrackingJS = window.tracking;

class carTracker extends TrackingJS.Tracker {
  constructor() {
    super();
  }

  track(pixel, width, height) {
    this.emit('track', {});
  }
}

TrackingJS.CarTracker = carTracker;

class CarTracker {
  init() {
    return new TrackingJS.CarTracker();
  }
}

module.exports = new CarTracker();




