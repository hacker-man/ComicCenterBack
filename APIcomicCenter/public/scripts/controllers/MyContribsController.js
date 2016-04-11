angular.module("comicApp")
    .controller("MyContribsController", ["$scope","$log","$location","LogUser","APIClient","paths", function($scope,$log,$location,LogUser,APIClient,paths) {
        //scope init:
        $scope.model = [];
        $scope.type = "Contrib"
        //items subidos por mi:
        var user = LogUser.getLogin();
        var user_json = {
            uploadBy: user
        };
        $scope.eliminar = function(item){
          APIClient.deleteItem(item).then(
            function(response){
              console.log(response);
              console.log(paths.auxiliar2);
              $location.url(paths.auxiliar2);
            },
            function(err){
              console.log(err);
            }
          );
        };
        //recuperando items:
        $scope.uiState = 'loading';
        APIClient.MyContribItems(user_json).then(
            function(items) {
                $log.log("SUCCESS", items);
                $scope.model = items;
                if ($scope.model.length == 0)
                    $scope.uiState = 'blank'
                else {
                    $scope.uiState = 'ideal'

                }
            },
            function(err) {
                $log.error("Error", err);
                $scope.uiState = 'error';
            }
        );
    }]);
