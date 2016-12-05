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
	companies.push(req.body);
});

/* PUT companie */
router.put('/api/companies/:cnpj', function(require, response, next) {
	var companieCNPJ = req.params.id;
	var companieInfo = req.body;

	usersDB.update(
		{'_cnpj': companieCNPJ},
		companieInfo,
		function(error, companie) {
			if (error)
				response.send(error);
			else
				response.json(companie);
		}
	);
});

module.exports = router;
