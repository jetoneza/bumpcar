var Dispatcher = require('../dispatchers/ViolationsDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('underscore');
var CHANGE_EVENT = 'change';
var _data = [];
var _count = [];

var ViolationsStore = assign({}, EventEmitter.prototype, {

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
  },

  getCount: function () {
    return _count;
  }
});

ViolationsStore.dispatchToken = Dispatcher.register(function (action) {
  switch (action.type) {
    case 'GET_VIOLATIONS':
      var data = action.data;
      if (!data.error) {
        _data = data;
      }
      ViolationsStore.emitChange();
      break;
    case 'GET_VIOLATIONS_COUNT':
      var data = action.data;
      if (!data.error) {
        _count = data;
      }
      ViolationsStore.emitChange();
      break;
  }
});

module.exports = ViolationsStore;
