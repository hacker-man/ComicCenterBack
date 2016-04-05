angular.module("comicApp").service("APIClient", ["$http", "$q", "$filter", "apiPaths",
    function($http, $q, $filter, apiPaths) {

        this.apiRequest = function(url) {

            var deferred = $q.defer();

            $http.get(url).then(

                function(response) {
                    deferred.resolve(response.data);
                },

                function(response) {
                    deferred.reject(response.data);
                }
            );
            return deferred.promise;
        }

        this.getItems = function() {
            return this.apiRequest(apiPaths.items);

        };

        this.registerUser = function(user) {
            var deferred = $q.defer();
            $http.post(apiPaths.users, user).then(
                function(response) {
                    deferred.resolve(response.data);
                },
                function(response) {
                    deferred.reject(respone.data);
                }
            );
            return deferred.promise;
        };

        /*this.getMovie = function(movieID) {
            var url = URL.resolve(apiPaths.movieDetail, { id: movieID });
            return this.apiRequest(url);

        };*/

        /*  this.createMovie = function (movie) {
              var deferred = $q.defer();
              movie.owner = LogUser.getLogin();
              movie.user_rent = "";
              movie.created_date = $filter('date')(new Date(), 'yyyy-MM-dd');
              movie.rent_date = "";
              //movie.owner = LogUser.getLogin();
              $http.post(apiPaths.movies, movie).then(

                  function (response) {
                      deferred.resolve(response.data);
                  },
                  function (response) {
                      deferred.reject(response.data);
                  }
              );
              return deferred.promise;
          };

          this.modifyMovie = function (movie) {
              var deferred = $q.defer();
              var ruta = apiPaths.movies + movie.id;
              console.log(ruta,movie);
              $http.put(ruta,movie).then(
                  function (respose) {
                      deferred.resolve(respose.data);
                  },
                  function (response) {
                      deferred.reject(response.data);
                  }
              );
              return deferred.promise;
          };*/
    }


]);
