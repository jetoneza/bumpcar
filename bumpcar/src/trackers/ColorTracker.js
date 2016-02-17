/**
 *
 */
var TrackingJS = window.tracking;

class ColorTracker {
  init(colors) {
    return new TrackingJS.ColorTracker(colors);
  }

  registerColor(colorName, color) {
    console.log('Not yet implemented.')
  }
}

export default new ColorTracker();
