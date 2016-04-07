angular.module("comicApp").controller("ItemDetailController",
    ["$scope","$routeParams","$location","APIClient","paths",function($scope,$routeParams,$location,APIClient,paths){
        //scope init:"
        $scope.model = {};
        $scope.uiState = 'loading';
        //Controller init
        APIClient.getItem($routeParams.id).then(
            //Pelicula encontrada:
            function(item){
                $scope.model = item;
                $scope.uiState = 'ideal';
                console.log(item);
                //$scope.$emit("changeTitle",$scope.model.titulo);
            },
            //Pelicula no encontrada:
            function(error){
                //TODO: improve error management
                $location.url(paths.notFound);
            }
        );
    }]
);
