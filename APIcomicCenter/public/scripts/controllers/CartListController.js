angular.module("comicApp")
    .controller("CartListController", ["$scope","$log","$location","LogUser","APIClient","paths",function($scope,$log,$location,LogUser,APIClient,paths) {
        //scope init:
        $scope.model = [];
        $scope.type = 'Cart';
        //objetos en mi carrito:
        var user = LogUser.getLogin();
        var user_json = {
            en_carrito: user
        };
        //controller methods:
        $scope.purchase = function(item){
          APIClient.deleteItem(item).then(
            function(response){
              console.log(response);
              console.log(paths.auxiliar);
              LogUser.deleteFromCart();
              $location.url(paths.auxiliar);
            },
            function(err){
              console.log(err);
            }
          );
        };
        //recuperando items:
        $scope.uiState = 'loading';
        APIClient.getItemsInMyCart(user_json).then(
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
            }
        );
    }]);
