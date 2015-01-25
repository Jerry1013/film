var request = require("request");
var config = require("../config");


exports.getFilms = function(req, res){
	var reqUrl = config.api.films + "?cateId="+req.params.cateId;
	request(reqUrl, function(error, response, body) {
		 res.json(JSON.parse(body));
    });
}

exports.getFilm = function(req , res){
	var reqUrl = config.api.filmDetail+"?filmId="+req.params.filmId;
	request(reqUrl, function(error, response, body) {
		 res.json(JSON.parse(body));
    });
}

exports.orderFilm = function(req, res){
	var reqUrl  = config.api.orderFilm + "?filmId="+req.params.filmId+"&totalPrice="+req.params.amount+"&houseId="+req.params.houseId;
	request(reqUrl, function(error, response, body) {
		 res.json(JSON.parse(body));
    });
}

exports.getOrder = function(req , res){
	var reqUrl = config.api.getOrder+ "?orderId="+req.params.orderId;
	request(reqUrl , function(error , response, body){
		 res.json(JSON.parse(body));
	});
}

exports.searchFilm = function(req , res){
    request.post(config.api.searchFilm ,{form :  {searchText :req.body.searchText }}
        ,function(error , response, body){
         res.json(JSON.parse(body));
    });
};

exports.getHouses = function(req , res){
    request(config.api.houses , function(error , response , body){
        res.json(JSON.parse(body));
    });
}