angular.module("comicApp")
    .controller("MyAccountController", ["$scope", "$rootScope", "$location", "APIClient", "LogUser", "paths", function($scope, $rootScope, $location, APIClient, LogUser, paths) {
        //scope init:
        $scope.user_data = {};
        var user = LogUser.getLogin();
        var user_json = {
            nickname: user
        };
        $scope.MiCarrito = function() {
            $location.url(paths.itemsCartPath);
        };
        APIClient.getDataUser(user_json).then(
            function(user) {
                console.log(user);
                $scope.user_data = user;
            },
            function(err) {
                console.log(err);
            }
        );
    }]);
