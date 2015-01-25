angular.module("controllers")
.controller("payCtrl" , ["$scope" ,"$stateParams" ,"filmService", 
	function($scope ,$stateParams ,filmService){

        console.log($stateParams.houseCode);
		$scope.getOrder = function(){
			filmService.getOrder({action : "getOrder" , orderId : $stateParams.orderId})
			.$promise.then(function(data){
				  $scope.order = data;
			});
		};

        $scope.houseCode = $stateParams.houseCode;
}]);