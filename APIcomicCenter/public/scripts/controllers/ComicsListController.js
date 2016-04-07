angular.module("comicApp")
    .controller("ComicsListController", ["$scope", "$log", "$window", "$location", "$filter", "APIClient", "paths", function($scope, $log, $window, $location, $filter, APIClient, paths) {
        //scope init:
        $scope.model = [];
        //Controller start:
        $scope.uiState = 'loading';
        APIClient.getItems().then(
            //Promesa resuelta:
            function(data) {
                $log.log("SUCCESS", data);
                $scope.model = data.items;
                if ($scope.model.length == 0)
                    $scope.uiState = 'blank'
                else {
                    $scope.uiState = 'ideal'

                }
            },
            //Promesa rechazada:
            function(data) {
                $log.error("Error", data);
                $scope.uiState = 'error';
            }
        );
    }]);
