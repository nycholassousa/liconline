var express = require('express');
var router = express.Router();
var companiesDB = require('../models/companies');

/* GET all companies */
router.get('/api/companies', function(require, response, next) {
	companiesDB.find({}, function(error, companies){
		if (error) next (error);
  		else {
  			response.send(companies);
  		}
  	});
});

/* POST companie */
router.post('/api/companies', function(require, response, next) {
	//console.log(require.body);
	var newCompanie = {
		name: require.body.name,
		cnpj: require.body.cnpj,
		email: require.body.email,
		address: require.body.address,
		number: require.body.number,
		cep: require.body.cep,
		phone: require.body.phone
	};

	companiesDB.create(newCompanie, function(error, next){
		if (error)
			next(error);
		else
			response.send(newCompanie);
	});
});

/* PUT companie */
router.put('/api/companies/:cnpj', function(require, response, next) {

});

module.exports = router;
