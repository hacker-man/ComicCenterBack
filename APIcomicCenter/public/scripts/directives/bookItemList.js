angular.module("comicApp").directive("bookItemList",function(){
  return {
      restrict:"AE",
      templateUrl:"views/bookItemList.html",
      scope:{
          model:"=items",
      }
  };
});
