angular.module("comicApp")
    .controller("ComicsListController", ["$scope", "$log", "$window", "$location", "$filter", "APIClient","URL","paths", function($scope, $log, $window, $location, $filter, APIClient,URL,paths) {
        //scope init:
        $scope.model = [];
        $scope.currentPath = $location.url();
        //controller methods:
        $scope.goDetail = function(book){
          console.log("Entro en goDetail,id:",book._id);
          var detail = URL.resolve(paths.itemDetail,{id:book._id});
          $location.url(detail);
      }
        //Controller start:
        $scope.uiState = 'loading';
        APIClient.getItems($scope.currentPath).then(
            function(items) {
                $log.log("SUCCESS", items);
                $scope.model = items;
                if ($scope.model.length == 0)
                    $scope.uiState = 'blank'
                else {
                    $scope.uiState = 'ideal'

                }
            },
            function(err) {
                $log.error("Error", err);
                $scope.uiState = 'error';
            });
        //Listener:
        $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
              $scope.currentPath = $location.url();
              console.log("cambio");
        });
    }]
  );
