angular.module("comicApp")
    .controller("MenuController", ["$scope", "$location", "paths",
        function($scope, $location, paths) {
          $scope.paths = paths;
          $scope.currentPath = $location.url();
          $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
                $scope.currentPath = $location.url();
          });
        }
    ]);
