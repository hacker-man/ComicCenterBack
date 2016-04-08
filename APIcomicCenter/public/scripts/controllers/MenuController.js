angular.module("comicApp")
    .controller("MenuController", ["$scope", "$location", "paths", "LogUser",
        function($scope, $location, paths, LogUser) {
            $scope.model = {
                selectedItem: paths.home,
                user: ""
            }
            $scope.paths = paths;
            $scope.currentPath = $location.url();
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
                    $scope.currentPath = $location.url();
                }
            //controller listener:
            $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
                $scope.establishRoute();
            });
        }
    ]);
