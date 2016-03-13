var express = require('express');
var router = express.Router();
var request = require('request');
var API = require('../constants/API');

/* GET users listing. */
router.get('/', function (req, res, next) {
  request.get({url: API.PATH + 'test'}, function (err, response, body) {
    var data = JSON.parse(body);
    res.send(data);
  });
});

module.exports = router;
