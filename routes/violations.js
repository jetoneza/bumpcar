var express = require('express');
var router = express.Router();
var request = require('request');
var API = require('../constants/API');

/* violations */
router.get('/:action', function (req, res, next) {
  var action = req.params.action;


  request.get({url: API.PATH + 'violations/' + action + '?key=' + API.APP_KEY}, function (err, response, body) {
    var data = JSON.parse(body);
    res.send(data);
  })

})
;

module.exports = router;
