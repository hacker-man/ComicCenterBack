angular.module("comicApp").service("APIClient", ["$http", "$q", "apiPaths", "paths", "URL",
    function($http, $q, apiPaths, paths, URL) {
        //Service propieties:
        var rutaApi = {}
        //rutas comics:
        rutaApi[paths.itemsComicAll] = apiPaths.itemAllComics;
        rutaApi[paths.itemsComicAdventure] = apiPaths.itemAdventureComics;
        rutaApi[paths.itemsComicHero] = apiPaths.itemHeroComics;
        rutaApi[paths.itemsComicSciFi] = apiPaths.itemSciFiComics;
        //rutas mangas:
        rutaApi[paths.itemsMangaAll] = apiPaths.itemAllMangas;
        rutaApi[paths.itemsMangaShonen] = apiPaths.itemShonenMangas;
        rutaApi[paths.itemsMangaSeinen] = apiPaths.itemSeinenMangas;
        rutaApi[paths.itemsMangaMecha] = apiPaths.itemMechaMangas;

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

        this.getItems = function(clientPath) {
            console.log(clientPath,rutaApi[clientPath]);
            return this.apiRequest(rutaApi[clientPath]);
        };

        this.getItem = function(itemID) {
            var url = URL.resolve(apiPaths.itemDetail, {
                id: itemID
            });
            return this.apiRequest(url);
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

        this.logIn = function(credentials) {
            var deferred = $q.defer();
            $http.post(apiPaths.loginApiPath, credentials).then(
                function(response) {
                    deferred.resolve(response.data);
                },
                function(response) {
                    deferred.reject(response.data);
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
