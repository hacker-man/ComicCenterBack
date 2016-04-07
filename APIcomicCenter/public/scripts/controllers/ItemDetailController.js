angular.module("comicApp").controller("ItemDetailController",
    ["$scope","$routeParams","$location","APIClient","paths",function($scope,$routeParams,$location,APIClient,paths){
        //scope init:"
        $scope.model = {};
        $scope.uiState = 'loading';
        //Controller init
        APIClient.getItem($routeParams.id).then(
            //Pelicula encontrada:
            function(data){
                $scope.model = data.item.object;
                $scope.uiState = 'ideal';
                console.log(data.item.object);
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
