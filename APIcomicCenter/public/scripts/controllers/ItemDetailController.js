angular.module("comicApp").controller("ItemDetailController",
    ["$scope","$routeParams","$location","APIClient","paths","LogUser",function($scope,$routeParams,$location,APIClient,paths,LogUser){
        //scope init:"
        $scope.model = {};
        $scope.uiState = 'loading';
        $scope.current = LogUser.getLogin();
        //controller methods:
        $scope.getOwerview = function(overview) {
            if (overview == ""){
                return "Not overview avaible";
            }
            else{
                return overview;
            }
        }
        $scope.add = function(){
          $scope.model.en_carrito = LogUser.getLogin();
          APIClient.addToCart($scope.model).then(
            //Todo ok:
            function(item){
              console.log("Añadido al carrito",item);
              LogUser.addToCart();
              $location.url(paths.home);
            },
            function(error){
                console.log("No se ha podido añadir al carrito",error);
            }
          );
        };
        //Controller init
        $scope.uiState = 'loading';
        $scope.$emit("changeTitle","Loading...");
        APIClient.getItem($routeParams.id).then(
            //Pelicula encontrada:
            function(item){
                $scope.model = item;
                $scope.uiState = 'ideal';
                console.log(item);
                $scope.$emit("changeTitle",$scope.model.titulo);
            },
            //Pelicula no encontrada:
            function(error){
                $scope.uiState = 'error';
                $location.url(paths.notFound);
            }
        );
    }]
);
