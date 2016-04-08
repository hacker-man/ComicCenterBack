angular.module("comicApp")
    .controller("AppController", ["$scope", "$location", "paths", "LogUser", function($scope, $location, paths, LogUser) {

        var controller = this;
        controller.titles = {}
        controller.titles[paths.home] = "comic center";
        controller.titles[paths.aboutUs] = "about us";
        controller.titles[paths.itemsComicAll] = "comics";
        controller.titles[paths.itemsMangaAll] = "mangas";
        controller.titles[paths.sellItem] = "share your comic";

        //scope init:
        $scope.model = {
            title: "",
            user: ""
        }
        //controller methods:
        $scope.isAuth = function() {
            return LogUser.isLogin();
        };

        $scope.logout = function() {
            LogUser.setLogin("");
            LogUser.setCartNumItems("-");
            $location.url(paths.home);
        };
        //scope event listeners:
        $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
            $scope.model.title = controller.titles[$location.url()] || "404 not Found";
        });
    }]);
