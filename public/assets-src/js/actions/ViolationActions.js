var ViolationsDispatcher = require('../dispatchers/ViolationsDispatcher');

module.exports = {
  getCount: function (data = {}) {
    var path = '/violations/count';
    $.get(path, data).done(function (results) {
      ViolationsDispatcher.dispatch({
        type: 'GET_VIOLATIONS_COUNT',
        data: results
      });
    });
  }
};
