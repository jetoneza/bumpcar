'use strict'

class TrackerHandler {
  constructor() {
    this.name = 'Tracker';
    this.element = '';
    this.tracker = null;
    this.task = null;
  }

  setTracker(trackerObject) {
    this.tracker = trackerObject.tracker;
    this.task = trackerObject.task;
  }

  setElement(element) {
    this.element = element;
  }

  setName(name) {
    this.name = name;
  }

  toObject() {
    return {
      element: this.element,
      name: this.name
    }
  }

  run() {
    if (this.task) {
      this.task.run();
    }
  }

  stop() {
    if (this.task) {
      this.task.stop();
    }
  }

  handle() {
    if (!this.tracker) {
      console.log('Please set a tracker');
      return;
    }

    this.tracker.on('track', this._eventHandler.bind(this));
  }
}

export default TrackerHandler;