angular.module("comicApp").service("LogUser", ["$window", function ($window) {

    this.setLogin = function(nick) {
        // Guardar el usuario en memoria del navegador
        window.localStorage.setItem("nick",nick);
    };
    this.getLogin = function() {
        // Recuperamos el usuario guardado en el navegador
        // console.log (window.localStorage.getItem("user"));
        return window.localStorage.getItem("nick");
    };
    this.isLogin = function() {
        var user = window.localStorage.getItem("nick") || "";
        if (user == "") {
            return false;
        } else {
            return true;
        }
    }
}]);
