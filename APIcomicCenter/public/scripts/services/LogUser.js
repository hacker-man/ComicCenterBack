angular.module("comicApp").service("LogUser", ["$window", function ($window) {

    this.setLogin = function(nick) {
        // Guardar el usuario en memoria del navegador
        window.localStorage.setItem("nick",nick);
    };
    this.setCartNumItems = function(cartNumItems){
      //Guarda el numero de elementos en el carrito del usuario en memoria del navegador
      window.localStorage.setItem("cartNumItems",cartNumItems);
    };
    this.setId = function(id_user){
      window.localStorage.setItem("id",id_user);
    };
    this.setTlf = function(tlf_user){
      window.localStorage.setItem("tlf",tlf_user);
    };
    this.setEmail = function(email_user){
      window.localStorage.setItem("email",email_user);
    };

    this.getLogin = function() {
        return window.localStorage.getItem("nick");
    };
    this.getCart = function() {
        return window.localStorage.getItem("cartNumItems");
    };
    this.getId = function() {
        return window.localStorage.getItem("id");
    };
    this.getTlf = function() {
        return window.localStorage.getItem("tlf");
    };
    this.getEmail = function() {
        return window.localStorage.getItem("email");
    };

    this.addToCart = function(){
      var items = window.localStorage.getItem("cartNumItems");
      items = parseInt(items) + 1;
      window.localStorage.setItem("cartNumItems",items);
   }

   this.deleteFromCart = function(){
     var items = window.localStorage.getItem("cartNumItems");
     console.log(items);
     items = parseInt(items) - 1;
     console.log(items);
     window.localStorage.setItem("cartNumItems",items);
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
