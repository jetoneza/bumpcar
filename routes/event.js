var express = require('express');
var router = express.Router();

/* Simulation page */
router.get('/:id', function (req, res, next) {
  res.redirect('/');
});

module.exports = router;
