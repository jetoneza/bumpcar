var Dispatcher = require('../dispatchers/EventsDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';
var _data = [];

var EventsStore = assign({}, EventEmitter.prototype, {

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

EventsStore.dispatchToken = Dispatcher.register(function (action) {
  switch (action.type) {
    case 'GET_EVENTS':
      _data = action.data;
      EventsStore.emitChange();
      break;
  }
});

module.exports = EventsStore;
