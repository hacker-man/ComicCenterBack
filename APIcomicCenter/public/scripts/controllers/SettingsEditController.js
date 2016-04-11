angular.module("comicApp")
.controller("SettingsEditController",["$scope","LogUser",function($scope,LogUser){
  //scope init:
  $scope.email = LogUser.getEmail();
  $scope.tlf = LogUser.getTlf();
  $scope.nickname = LogUser.getLogin();
}]);
