angular.module("comicApp").service("LogUser", ["$window", function ($window) {

    this.setLogin = function(nick) {
        // Guardar el usuario en memoria del navegador
        window.localStorage.setItem("nick",nick);
    };
    this.setCartNumItems = function(cartNumItems){
      //Guarda el numero de elementos en el carrito del usuario en memoria del navegador
      window.localStorage.setItem("cartNumItems",cartNumItems);
    }
    this.getLogin = function() {
        // Recuperamos el usuario guardado en el navegador
        // console.log (window.localStorage.getItem("user"));
        return window.localStorage.getItem("nick");
    };
    this.getCart = function() {
        return window.localStorage.getItem("cartNumItems");
    };

    this.sumOneToCart = function(){
      var items = this.getCart();
      items = parseInt(items) + 1;
      this.setCartNumItems(items);
   }

   this.deleteFromCart = function(){
     var items = this.getCart();
     items = parseInt(items) - 1;
     this.setCartNumItems(items);
   }

   this.deleteAllFromCart = function(){
     this.setCartNumItems("0");
   }

    this.isLogin = function() {
        var user = window.localStorage.getItem("nick") || "";
        if (user == "") {
            return false;
        } else {
            return true;
        }
    }
}]);
