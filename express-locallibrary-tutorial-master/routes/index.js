var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.send('Add DB Data here');
  //res.redirect('/catalog');
  //res.redirect('http://google.com');
  res.redirect('https://simulator-api.db.com/gw/oidc/authorize?response_type=code&client_id=24b8e99d-4c0c-4850-a069-169c6f5e810a&state=https://starthack2017.herokuapp.com/algo');
});

module.exports = router;
