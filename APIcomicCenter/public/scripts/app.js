angular.module("comicApp", ["ngRoute"])
  .config(["$routeProvider", "paths", function ($routeProvider, paths){
    $routeProvider.when(paths.registeruser, {
              templateUrl: "/views/UserRegister.html"
          }).otherwise({
              templateUrl:'views/404.html'
          })
    }]
  );
