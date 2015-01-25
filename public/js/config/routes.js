angular.module("filmApp")
.config(['$stateProvider','$urlRouterProvider' ,function($stateProvider , $urlRouterProvider){
        //set state mappings.
        $urlRouterProvider
            .when('/index', '/index/content/0')
            .otherwise("/index/content/0");

        $stateProvider
            .state('index', {
                url: "/index/content/:id",
                templateUrl: "/public/partials/index.content.html",
                controller : "indexCtrl"
            });

        $stateProvider
            .state("detail" , {
                url: "/detail/:id",
                templateUrl: "/public/partials/detail.html",
                controller : "detailCtrl"
            });

        $stateProvider
            .state("orderPay" , {
                url: "/order/:orderId/:houseCode",
                templateUrl: "/public/partials/pay.html",
                controller : "payCtrl"
            });


}]);
