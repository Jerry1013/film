
var request = require("request");
var config = require("../config");

exports.getCategories = function(req, res){

	request(config.api.categories, function(error, response, body) {
		 res.json(JSON.parse(body));
    });
    
}