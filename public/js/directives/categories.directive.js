angular.module("directives")
.directive("filmCategories" , [function(){
	return {
		replace : true,
		restrict : "EA",
		templateUrl : '/public/js/directives/templates/film.categories.html',
		scope : {
			categories : "=",
			findFilms : "&"
		},
		link : function(scope , element , attrs){
			  scope.films = function(id){
			  	  scope.findFilms(id);
			  };
		}
	}
}]);