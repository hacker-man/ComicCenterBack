angular.module("comicApp").directive("mediaItemList",function(){
  return {
      restrict:"AE",
      templateUrl:"views/movieItemList.html",
      scope:{
          model:"=items",
          type:"=",
          rent:"="
      }
  };
});
