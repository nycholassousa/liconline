var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(require, response, next) {
  var index = path.join(__dirname, '../public/index.html');
  response.sendFile(index);
});

module.exports = router;