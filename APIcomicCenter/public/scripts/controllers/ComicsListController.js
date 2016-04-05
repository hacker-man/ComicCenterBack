angular.module("comicApp")
    .controller("ComicsListController", ["$scope", "$log", "$window", "$location", "$filter", "APIClient", "paths", function ($scope, $log, $window, $location, $filter, APIClient, paths) {
        //scope init:
        $scope.model = [];
        //controller methods:
      /*  $scope.uiState = 'loading';
        $scope.rentMovie = function (movie) {
            movie.user_rent = LogUser.getLogin();
            movie.rent_date = $filter('date')(new Date(), 'yyyy-MM-dd');
            APIClient.modifyMovie(movie).then(
                function (movie) {
                    console.log("PELICULA ALQUILADA", movie);
                    $location.url(paths.home);
                },
                function (error) {
                    console.log("ERROR AL ALQUILAR PELICULA", error);
                }
            );
        }*/

        //Controller start:
        $scope.uiState = 'loading';
        APIClient.getItems().then(
            //Promesa resuelta:
            function (data) {
                $log.log("SUCCESS", data);
                $scope.model = data.items;
                if ($scope.model.length == 0)
                    $scope.uiState = 'blank'
                else {
                    $scope.uiState = 'ideal'

                }
            },
            //Promesa rechazada:
            function (data) {
                $log.error("Error", data);
                $scope.uiState = 'error';
            }
        );
    }]);
