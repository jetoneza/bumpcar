var express = require('express');
var router = express.Router();

/* Simulation page */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Simulation'});
});

module.exports = router;
