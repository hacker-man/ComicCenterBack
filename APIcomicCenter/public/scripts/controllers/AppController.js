angular.module("comicApp")
    .controller("AppController", ["$scope", "$location", "paths", "LogUser", "APIClient", function($scope, $location, paths, LogUser, APIClient) {

        var controller = this;
        controller.titles = {}
        controller.titles[paths.home] = "comic center";
        controller.titles[paths.aboutUs] = "about us";
        controller.titles[paths.itemsComicAll] = "comics";
        controller.titles[paths.itemsComicAdventure] = "comic-adventure";
        controller.titles[paths.itemsComicHero] = "comic-superheroes";
        controller.titles[paths.itemsComicSciFi] = "comic-sciFi";
        controller.titles[paths.itemsMangaAll] = "mangas";
        controller.titles[paths.itemsMangaShonen] = "manga-shonen";
        controller.titles[paths.itemsMangaSeinen] = "manga-seinen";
        controller.titles[paths.itemsMangaMecha] = "manga-mecha";

        controller.titles[paths.sellItem] = "share your comic";
        controller.titles[paths.myAccount] = "Account settings";
        controller.titles[paths.itemsCartPath] = "My Cart";
        controller.titles[paths.myContribsPath] = "My Contribs"

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
                function(res) {
                    console.log("logout OK", res);
                    console.log("add:Ahora hay", LogUser.getCart());
                    console.log($scope.datos_user);
                    LogUser.setLogin("");
                    LogUser.setCartNumItems("-");
                    LogUser.setId("");
                    LogUser.setTlf("");
                    LogUser.setEmail("");
                    $location.url(paths.home);
                },
                function(err) {
                    console.log("error al hacer logout", err);
                }
            );
        };
        //scope event listeners:
        $scope.$on("$locationChangeSuccess", function(evt, currentRoute) {
            $scope.model.title = controller.titles[$location.url()] || "404 not Found";
            if(!LogUser.isLogin() && ($location.url()==paths.itemsCartPath || $location.url()==paths.myContribsPath || $location.url()==paths.myAccount || $location.url()==paths.settingsEditPath || $location.url()==paths.sellItem )){
              $location.url(paths.registeruser);
            }
            if(LogUser.isLogin() && $location.url()==paths.registeruser){
                $location.url(paths.myAccount);
            }
        });
        $scope.$on("changeTitle", function(evt, title) {
            $scope.model.title = title;
        });
        $scope.$on("LogInUser", function(evt, datos_user) {
            $scope.datos_user = datos_user;
        });
    }]);
