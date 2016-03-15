var ViolationsDispatcher = require('../dispatchers/ViolationsDispatcher');

module.exports = {
  getCount: function () {
    var path = '/violations/count';
    $.get(path, {}).done(function (results) {
      ViolationsDispatcher.dispatch({
        type: 'GET_VIOLATIONS_COUNT',
        data: results
      });
    });
  }
};
