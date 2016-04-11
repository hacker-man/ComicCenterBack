angular.module("comicApp")
    .controller("SellItemController", ["$scope", "APIClient", "LogUser", function($scope, APIClient, LogUser) {
        //scope init:
        $scope.generos = [
            'shonen',
            'seinen',
            'mecha',
            'adventure',
            'superheroes',
            'sci-fi'
        ];
        $scope.model = {
            ISBN: "",
            titulo: "",
            autor: "",
            editorial: "",
            num_paginas: "",
            url_portada: "",
            tipo: "",
            genero: ['shonen'],
            overview: ""
        };
        //controller methods:
        $scope.saveItem = function() {
            console.log("save:", $scope.model);
            APIClient.registerItem($scope.model).then(
                function(item) {
                    $scope.model = {
                        ISBN: "",
                        titulo: "",
                        autor: "",
                        editorial: "",
                        num_paginas: "",
                        url_portada: "",
                        tipo: "",
                        genero: [],
                        overview: ""
                    }
                    $scope.itemForm.$setPristine();
                    $scope.model.tipo = 'comic';
                    console.log("ITEM REGISTRADO", item);
                },
                function(err) {
                    console.log("ERROR AL REGISTRAR ITEM", error);
                }
            );
        }
    }]);
