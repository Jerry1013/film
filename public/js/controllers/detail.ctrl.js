angular.module("controllers")
.controller("detailCtrl" , ["$scope" ,"$stateParams" ,"filmService" , "$state" ,'categoriesService',"houseService",
	function($scope ,$stateParams ,filmService ,$state ,categoriesService ,houseService){
         $scope.categories = [];



		 $scope.filmDetail = function(){
		 	filmService.getFilm({action : "detail" , filmId : $stateParams.id})
		 	.$promise.then(function(data){
		 		$scope.film = data;
		 	});
		 };

        $scope.getCategories = function(){
            categoriesService.getCategories().$promise.then(function(data){
                $scope.categories = data;
            });
        };

        $scope.getHouses = function(){
            houseService.getHouses().$promise.then(function(data){
                $scope.houses = data;
                $scope.selectedHse = data[0];
            });
        };

		$scope.order = function(){
		 	filmService.orderFilm({action : 'order' , filmId : $stateParams.id , amount : 200 , houseId : $scope.selectedHse.houseCode})
		 	.$promise.then(function(data){
					$state.go("orderPay" , {orderId : data.orderId,houseCode : $scope.selectedHse.houseCode});
		 	});
		 }
}]);