angular.module("comicApp")
    .controller("ComicsListController", ["$scope", "$log", "$window", "$location", "$filter", "APIClient", "paths", function($scope, $log, $window, $location, $filter, APIClient, paths) {
        //scope init:
        $scope.model = [];
        $scope.currentPath = $location.url();;
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
