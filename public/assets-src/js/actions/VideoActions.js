var VideosDispatcher = require('../dispatchers/VideosDispatcher');

module.exports = {
  getVideoData: function (videoName) {
    var path = `/assets-src/files/data/${videoName}_data.json`;
    $.get(path, {}).done(function (results) {
      VideosDispatcher.dispatch({
        type: 'GET_VIDEO_DATA',
        data: results
      });
    });
  }
};
