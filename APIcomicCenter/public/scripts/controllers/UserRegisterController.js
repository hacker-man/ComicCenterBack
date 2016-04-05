angular.module("comicApp")
.controller("UserRegisterController", ["$scope", "APIClient",
function($scope, APIClient) {
            //scope init:
            $scope.model = {};
            $scope.saveUser = function() {
                console.log($scope.model);
                console.log("se ejecuta saveUser()");
                APIClient.registerUser($scope.model).then(
                    function(movie) {
                        $scope.model = {};
                        console.log("USUARIO REGISTRADO", movie);
                    },
                    function(error) {
                        console.log("ERROR AL REGISTRAR USUARIO", error);
                    }
                )
            };
        }]);
