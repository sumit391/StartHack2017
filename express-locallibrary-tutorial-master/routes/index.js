var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.send('Add DB Data here');
  //res.redirect('/catalog');
  //res.redirect('http://google.com');

  // Check for the code here
  //res.param
  //if (res.param('code')){
  //	res.send('the access code is :' + res.param('code'));
  //}
  res.redirect('https://simulator-api.db.com/gw/oidc/authorize?response_type=code&client_id=24b8e99d-4c0c-4850-a069-169c6f5e810a&state=/algo');
});

router.get('/https://simulator-api.db.com/gw/oidc/authorize', function(req, res)){
  res.status(200).send('Done till here');	
  //res.status(200).post('https://simulator-api.db.com/gw/oidc/token')
};

//router.post('https://simulator-api.db.com/gw/oidc/token')
module.exports = router;
