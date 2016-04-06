angular.module('comicApp')
    .controller('LoginController', ["$scope", "APIClient", function($scope, APIClient) {
        //scope init:
        $scope.model = {}
            //scope methods:
        $scope.logUser = function() {
            APIClient.logIn($scope.model).then(
                function(response) {
                    $scope.model = {};
                    console.log('Login Hecho',response);
                },
                function(error) {
                    console.log("error al hacer Login",error);
                }
            );
        }
    }]);
