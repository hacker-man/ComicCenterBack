angular.module("comicApp").directive("mediaItemList",function(){
  return {
      restrict:"AE",
      templateUrl:"views/MyItemList.html",
      scope:{
          model:"=items",
          delete: "=",
          type: "=",
      }
  };
});
