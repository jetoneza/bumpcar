/**
 * Car Tracker Class
 * @author jet.oneza <jet.oneza@gmail.com>
 */
var TrackingJS = window.tracking;

class CarTracker extends TrackingJS.Tracker {
  constructor() {
    super();
  }

  track(pixel, width, height) {
    this.emit('track', {});
  }
}

TrackingJS.CarTracker = CarTracker;

module.exports = new TrackingJS.CarTracker();




