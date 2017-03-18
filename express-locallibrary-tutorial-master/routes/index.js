var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.send('Add DB Data here');
  //res.redirect('/catalog');
  //res.redirect('http://google.com');
  res.redirect('https://simulator-api.db.com/gw/oidc/authorize');
});

module.exports = router;
