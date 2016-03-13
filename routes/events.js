var express = require('express');
var router = express.Router();
var request = require('request');
var API = require('../constants/API');

/* GET events listing. */
router.get('/', function (req, res, next) {
  request.get({url: API.PATH + 'events?key=' + API.APP_KEY}, function (err, response, body) {
    var data = JSON.parse(body);
    res.send(data);
  });
});

module.exports = router;
