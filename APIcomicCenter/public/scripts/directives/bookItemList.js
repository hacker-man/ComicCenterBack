angular.module("comicApp").directive("bookItemList",function(){
  return {
      restrict:"AE",
      templateUrl:"views/BookItemList.html",
      scope:{
          model:"=items",
          go:"="
      }
  };
});
