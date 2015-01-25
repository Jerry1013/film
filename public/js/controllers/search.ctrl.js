angular.module("controllers")
   .controller("searchCtrl" , ["$scope" , "filmService" , "$state"
   	,function($scope ,filmService ,$state){
   			
   		$scope.searchKey = '';

	   	$scope.searchFilm = function(){
		 	if($scope.searchKey){
		 		filmService.searchFilm({searchText : $scope.searchKey})
		 		.$promise.then(function(data){
                     $scope.$emit("search:results" , data);
		 		});
		 	}
		}
   }]);