var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Backend is Ruunig here acha');
});

module.exports = router;
