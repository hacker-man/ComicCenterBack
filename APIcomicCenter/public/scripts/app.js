angular.module("comicApp", ["ngRoute", "URL"])
    .config(["$routeProvider", "paths", function($routeProvider, paths) {
        $routeProvider.when(paths.registeruser, {
            templateUrl: "/views/UserRegister.html"
        }).when(paths.loginPath, {
            templateUrl: "views/login.html"
         }).when(paths.itemDetail,{
                controller:"ItemDetailController",
          			templateUrl: "views/ItemDetail.html"
        }).when(paths.itemsPath, {
            templateUrl: "views/ComicItemList.html"
        }).when(paths.itemsComicAll, {
            templateUrl: "views/ComicItemList.html"
        }).when(paths.itemsComicAdventure, {
            templateUrl: "views/ComicItemList.html"
        }).when(paths.itemsComicHero, {
            templateUrl: "views/ComicItemList.html"
        }).when(paths.itemsComicSciFi, {
            templateUrl: "views/ComicItemList.html"
        }).when(paths.itemsMangaAll, {
            templateUrl: "views/ComicItemList.html"
        }).when(paths.itemsMangaShonen, {
            templateUrl: "views/ComicItemList.html"
        }).when(paths.itemsMangaMecha, {
            templateUrl: "views/ComicItemList.html"
        }).when(paths.sellItem, {
            templateUrl: "views/SellItem.html"
        }).otherwise({
            templateUrl: 'views/404.html'
        })
    }]);
