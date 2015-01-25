angular.module("services")
.factory("houseService" , ["$resource" , function($resource){
        var service = $resource("houses/:houseId" ,{},{
            getHouses : {
                method : 'GET'  ,isArray : true
            }
        });

        return service;
}]);