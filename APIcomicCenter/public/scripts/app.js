angular.module("comicApp", ["ngRoute","URL"])
  .config(["$routeProvider", "paths", function ($routeProvider, paths){
    $routeProvider.when(paths.registeruser, {
              templateUrl: "/views/UserRegister.html"
          }).when(paths.loginPath,{
            templateUrl:"views/login.html"
          }).when(paths.itemsPath,{
            templateUrl:"views/ComicItemList.html"
          }).otherwise({
              templateUrl:'views/404.html'
          })
    }]
  );
