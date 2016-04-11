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
        }).when(paths.myAccount,{
          templateUrl: "views/myAccount.html"
        }).when(paths.itemsCartPath,{
          templateUrl: "views/CartList.html"
        }).when(paths.myContribsPath,{
            templateUrl: "views/MyContribsList.html"
        }).when(paths.settingsEditPath,{
            templateUrl: "views/SettingsEdit.html"
        }).when(paths.auxiliar,{
            redirectTo: paths.itemsCartPath
        }).when(paths.auxiliar2,{
            redirectTo: paths.myContribsPath
        }).otherwise({
            templateUrl: 'views/404.html'
        })
    }]);
