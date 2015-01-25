angular.module("controllers")
.controller("indexCtrl" , ["$scope" , "categoriesService" , "filmService" ,"$q"  ,"$stateParams","$rootScope",
	function($scope ,categoriesService,filmService ,$q ,$stateParams ,$rootScope){
     
     $scope.categories = [];

     $scope.films = [];

	 //set the default pageNumber.
     $scope.pageNumber = 1;

	 $scope.getCategories = function(){
			categoriesService.getCategories().$promise.then(function(data){
					$scope.categories = data;
			});
	 };

     filmService.getFilms({action : "films" , cateId : $stateParams.id!=0?$stateParams.id:1}).$promise.then(function(data){
            $scope.films = data;
            $scope.pageNumber = 1;
            $scope.catId = $stateParams.id!=0?$stateParams.id:1;
        });

	 $scope.getFilms = function(id){
	 		filmService.getFilms({action : "films" , cateId : id}).$promise.then(function(data){
				    $scope.films = data;
				    $scope.pageNumber = 1;
				    $scope.catId = id;
	 		});
	 };

	 $scope.loadFilms = function(){
            var defer = $q.defer();
	 		filmService.getFilms({action : "films" , cateId : $scope.catId , pageNumber : $scope.pageNumber+1}).$promise.then(function(data){
				    $scope.films = $scope.films.concat(data);
				    $scope.pageNumber++;
				    defer.resolve();
	 		});
            return defer;
	 };

        $rootScope.$on("search:results" , function(evt , data){
	 		$scope.films = data;
	 });



}]);

