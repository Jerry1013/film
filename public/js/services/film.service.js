angular.module("services")
.factory("filmService" , ["$resource" , function($resource){
	var service = $resource("film/:action/:cateId/:filmId/:amount/:orderId/:houseId" ,{},{
			  getFilms : {
			  	 method : 'GET'  ,isArray : true
			  },
			  getFilm : {
			  	 method : 'GET' , isArray : false
			  },
			  searchFilm : {
			  	method : 'POST' ,params : {action : 'searchFilm'} , isArray : true
			  },
			  orderFilm : {
			  	method : 'GET' , isArray : false
			  },
			  getOrder : {
			  	method : 'GET' , isArray : false
			  }
		});

		return service;
}]);