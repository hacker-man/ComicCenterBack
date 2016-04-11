angular.module("comicApp").service("APIClient", ["$http", "$q", "apiPaths", "paths", "URL",
    function($http, $q, apiPaths, paths, URL) {
        this.apiRequest = function(url) {

            var deferred = $q.defer();

            $http.get(url).then(

                function(response) {
                    deferred.resolve(response.data.items);
                },

                function(response) {
                    deferred.reject(response.data.err);
                }
            );
            return deferred.promise;
        }

        this.apiRequestDetail = function(url) {

            var deferred = $q.defer();

            $http.get(url).then(

                function(response) {
                    deferred.resolve(response.data.item[0]);
                },

                function(response) {
                    deferred.reject(response.data.err);
                }
            );
            return deferred.promise;
        }


        this.getItems = function(clientPath) {
            console.log("Estoy dentro de getItems",clientPath);
            var url = apiPaths.version + clientPath;
            return this.apiRequest(url);
        };

        this.getItem = function(itemID) {
            var url = URL.resolve(apiPaths.itemDetail, {
                id: itemID
            });
            console.log("url:",url);
            return this.apiRequestDetail(url);
        };

        this.registerUser = function(user) {
            var deferred = $q.defer();
            $http.post(apiPaths.users, user).then(
                function(response) {
                    deferred.resolve(response.data);
                },
                function(response) {
                    deferred.reject(response.data);
                }
            );
            return deferred.promise;
        };

        this.registerItem = function(item){
          var deferred = $q.defer();
          $http.post(apiPaths.items,item).then(
              function(response){
                deferred.resolve(response.data);
              },
              function(response){
                deferred.reject(response.data);
              }
          );
          return deferred.promise;
        };

        this.logIn = function(credentials) {
            var deferred = $q.defer();
            $http.post(apiPaths.loginApiPath, credentials).then(
                function(response) {
                    deferred.resolve(response.data.user[0]);
                },
                function(response) {
                    deferred.reject(response.data);
                }
            );
            return deferred.promise;
        };

        this.addToCart = function(item){
           var deferred = $q.defer();
           var ruta = apiPaths.items +"/"+ item._id;
           $http.put(ruta,item).then(
             function(response){
               deferred.resolve(response.data);
             },
             function(response){
               deferred.reject(response.data);
             }
           );
           return deferred.promise;
        };
        this.updateCart = function(user){
          var deferred = $q.defer();
          var ruta = apiPaths.users + "/" + user._id;
          $http.put(ruta,user).then(
            function(response){
              deferred.resolve(response.data);
            },
            function(response){
              deferred.reject(response.data);
            }
          );
          return deferred.promise;
        };

        this.deleteItem = function(item){
          var deferred = $q.defer();
          var ruta = apiPaths.items + "/" + item._id;
          $http.delete(ruta).then(
            function(response){
              deferred.resolve(response.data);
            },
            function(response){
              deferred.reject(response.data);
            }
          );
          return deferred.promise;
        };

        this.getItemsInMyCart = function(owner){
          var deferred = $q.defer();
          $http.post(apiPaths.inMyCart,owner).then(
            function(response){
              deferred.resolve(response.data.myItems);
            },
            function(response){
              deferred.resolve(response.data.err);
            }
          );
          return deferred.promise;
        };

        this.MyContribItems = function(owner){
          var deferred = $q.defer();
          $http.post(apiPaths.myContribs,owner).then(
            function(response){
              deferred.resolve(response.data.myItems);
            },
            function(response){
              deferred.resolve(response.data.err);
            }
          );
          return deferred.promise;
        };
        this.getDataUser = function(user){
          var deferred = $q.defer();
          $http.post(apiPaths.dataUser,user).then(
            function(response){
              deferred.resolve(response.data.user[0])
            },
            function(response){
              deferred.reject(response);
            }
          );
          return deferred.promise;
        };

    }


]);
