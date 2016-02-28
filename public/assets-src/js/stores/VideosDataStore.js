var Dispatcher = require('../dispatchers/VideosDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';
var _data = [];

var VideosDataStore = assign({}, EventEmitter.prototype, {

  /**
   * Emit Change Event
   */
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  /**
   * Add Change Event Listener
   * @param callback
   */
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * Remove Change Event Listener
   * @param callback
   */
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  /**
   * @returns {Array}
   */
  getData: function () {
    return _data;
  }
});

VideosDataStore.dispatchToken = Dispatcher.register(function (action) {
  switch (action.type) {
    case 'GET_VIDEO_DATA':
      _data = action.data;
      VideosDataStore.emitChange();
      break;
  }
});

module.exports = VideosDataStore;
