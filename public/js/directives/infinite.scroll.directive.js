//infinite scroll directive.
angular.module("directives")
.directive("infiniteScroll" , [function(){
         return {
             restrict : "EA",
             template : "<div ng-hide='loadComplete' class='jobs-loading'></div>",
             scope : {
                getList : "&"
             },
             link : function(scope , element , attrs){
                 //set default load complete status to true.
                 scope.loadComplete = true;
                 //listen the window scroll event.
                 $(window).scroll(function(){
                     if ($(document).scrollTop() + $(window).height()>= $(document).height()) {
                        if(scope.loadComplete){
                            //set load complete status to false, and the loading icon will be shown on the page of bottom.
                            scope.loadComplete = false;
                            //getList will return promise,after get promise, we set load complete status to true.
                            scope.getList().promise.then(function(data){
                                scope.loadComplete = true;
                            });
                        }
                     }
                 });
             }
         }
    }]);