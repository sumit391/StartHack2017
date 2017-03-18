var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send('Add DB Data here');
  res.redirect('/catalog');
});

module.exports = router;
