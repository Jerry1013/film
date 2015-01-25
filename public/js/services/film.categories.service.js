angular.module("services")
.factory("categoriesService" , ["$resource" , function($resource){
	var service = $resource("film/categories" ,{},{
			  getCategories : {
			  	 method : 'GET' ,isArray : true
			  }
		});

	return service;
}]);