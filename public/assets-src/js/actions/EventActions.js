var EventsDispatcher = require('../dispatchers/EventsDispatcher');

module.exports = {
  getEvents: function () {
    var path = '/events';
    $.get(path, {}).done(function (results) {
      EventsDispatcher.dispatch({
        type: 'GET_EVENTS',
        data: results
      });
    });
  }
};
