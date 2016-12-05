var express = require('express');
var router = express.Router();
var usersDB = require('../models/users');

/* GET all users */
router.get('/api/users', function(require, response, next) {
	usersDB.find({}, function(error, users){
		if (error)
			next (error);
  		else {
  			response.send(users);
  		}
  	});
});

/* POST user */
router.post('/api/users', function(require, response, next) {
	users.push(req.body);
});

/* PUT user */
router.put('/api/users/:id', function(require, response, next) {
	var userID = req.params.id;
	var userInfo = req.body;

	usersDB.update(
		{'_id': userID},
		userInfo,
		function(error, user) {
			if (error)
				response.send(error);
			else
				response.json(user);
		}
	);
});

module.exports = router;
