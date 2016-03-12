var EventsDispatcher = require('../dispatchers/EventsDispatcher');

module.exports = {
  getEvents: function () {
    var path = `/assets-src/files/data/events.json`;
    $.get(path, {}).done(function (results) {
      EventsDispatcher.dispatch({
        type: 'GET_EVENTS',
        data: results
      });
    });
  }
};
