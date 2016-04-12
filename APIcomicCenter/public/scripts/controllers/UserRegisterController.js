angular.module("comicApp")
.controller("UserRegisterController", ["$scope", "APIClient",
function($scope, APIClient) {
            //scope init:
            $scope.model = {};
            $scope.saveUser = function() {
                APIClient.registerUser($scope.model).then(
                    function(movie) {
                        $scope.successMessage = "¡You have successfully registered!";
                        $scope.errorMessage = false;
                        $scope.model = {};
                        $scope.registerForm.$setPristine();
                        console.log("USUARIO REGISTRADO", movie);
                    },
                    function(error) {
                        $scope.errorMessage = "This nickname is already in use";
                        $scope.successMessage = false;
                        console.log("ERROR AL REGISTRAR USUARIO", error);
                    }
                )
            };
        }]);
