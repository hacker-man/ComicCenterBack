angular.module("comicApp")
    .controller("MenuController", ["$scope", "$location", "paths", "LogUser",
        function($scope, $location, paths, LogUser) {
           //scope init:
            $scope.model = {
                selectedItem: paths.aboutUs,
                user: ""
            }
            $scope.paths = paths;
            $scope.model.user = LogUser.getLogin();
            $scope.model.cartNumItems = LogUser.getCart();
            //controller methods:
            $scope.getClassForItem = function(item) {
                if ($scope.model.selectedItem == item) {
                    return "active";
                } else {
                    return "";
                }
            }
            $scope.establishRoute = function(item) {
                    $scope.model.user = LogUser.getLogin();
                    $scope.model.selectedItem = $location.path();
                }
            //controller listener:
            $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
                $scope.establishRoute();
            });
        }
    ]);
