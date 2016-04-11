angular.module('comicApp')
    .controller('LoginController', ["$scope","$rootScope","$window","APIClient","LogUser","paths",function($scope,$rootScope,$window,APIClient,LogUser,paths) {
        //scope init:
        $scope.model = {}
        $scope.paths = paths;
        //scope methods:
        $scope.logUser = function() {
            APIClient.logIn($scope.model).then(
                function(response) {
                    LogUser.setLogin(response.nickname);
                    LogUser.setCartNumItems(response.carrito);
                    LogUser.setId(response._id);
                    LogUser.setTlf(response.tlf);
                    LogUser.setEmail(response.email);
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
