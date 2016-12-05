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
var newUser = {
		name: require.body.name,
		lastname: require.body.lastname,
		cpf: require.body.cpf,
		email: require.body.email,
		address: require.body.address,
		number: require.body.number,
		cep: require.body.cep,
		phone: require.body.phone,
		password: require.body.password
	};

	usersDB.create(newUser, function(error, next){
		if (error)
			next(error);
		else
			response.send(newUser);
	});
});

/* PUT user */
router.put('/api/users/:cpf', function(require, response, next) {

});

module.exports = router;
