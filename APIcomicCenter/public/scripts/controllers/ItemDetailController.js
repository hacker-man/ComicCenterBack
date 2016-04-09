angular.module("comicApp").controller("ItemDetailController",
    ["$scope","$routeParams","$location","APIClient","paths","LogUser",function($scope,$routeParams,$location,APIClient,paths,LogUser){
        //scope init:"
        $scope.model = {};
        $scope.uiState = 'loading';
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
          var elementos = LogUser.getCart();
          elementos = parseInt(elementos) + 1;
          LogUser.setCartNumItems(elementos);
          APIClient.addToCart($scope.model).then(
            //Todo ok:
            function(item){
              console.log("Añadido al carrito",item);
              $location.url(paths.home);
            },
            function(error){
                console.log("No se ha podido añadir al carrito",error);
            }
          );
        };
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
