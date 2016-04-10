angular.module('comicApp')
    .controller('LoginController', ["$scope","$rootScope","$window","APIClient","LogUser", function($scope,$rootScope,$window,APIClient,LogUser) {
        //scope init:
        $scope.model = {}
        //scope methods:
        $scope.logUser = function() {
            APIClient.logIn($scope.model).then(
                function(response) {
                    LogUser.setLogin(response.nickname);
                    LogUser.setCartNumItems(response.carrito);
                    var carrito = LogUser.getCart();
                    var user = LogUser.getLogin();
                    console.log("Usuario logeado como",user,"items-carrito:",carrito);
                    var url = "/#";
                    $window.location.href = url;
                    $scope.model = {};
                    //Estos datos los uso en AppController
                    $scope.$emit("LogInUser",response);
                    console.log('Login Hecho,Estoy dentro',response);
                },
                function(error) {
                    console.log("error al hacer Login",error);
                }
            );
        }
    }]);
