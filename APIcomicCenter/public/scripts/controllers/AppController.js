angular.module("comicApp")
    .controller("AppController", ["$scope", "$location", "paths", "LogUser","APIClient",function($scope, $location, paths, LogUser,APIClient) {

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
        $scope.datos_user = {};
        //controller methods:
        $scope.isAuth = function() {
            return LogUser.isLogin();
        };

        $scope.logout = function() {
            var num_elementos = parseInt(LogUser.getCart());
            $scope.datos_user.carrito = num_elementos;
            APIClient.updateCart($scope.datos_user).then(
                function(res){
                  console.log("logout OK",res);
                  console.log("add:Ahora hay",LogUser.getCart());
                  console.log($scope.datos_user);
                  LogUser.setLogin("");
                  LogUser.setCartNumItems("-");
                  $location.url(paths.home);
                },
                function(err){
                  console.log("error al hacer logout",err);
                }
            );
        };
        //scope event listeners:
        $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
            $scope.model.title = controller.titles[$location.url()] || "404 not Found";
        });
        $scope.$on("LogInUser",function(evt,datos_user){
            $scope.datos_user = datos_user;
        });
    }]);
