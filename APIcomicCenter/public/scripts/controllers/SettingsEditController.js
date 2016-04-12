angular.module("comicApp")
    .controller("SettingsEditController", ["$scope", "LogUser", "APIClient", "paths", function($scope, LogUser, APIClient, paths) {
        var email = LogUser.getEmail()
        var tlf = LogUser.getTlf();
        var nickname = LogUser.getLogin();
        var id = LogUser.getId();
        //scope init:
        $scope.model = {
            email: email,
            tlf: tlf,
            nickname: nickname,
            _id: id
        }
        $scope.paths = paths;
        //scope methods:
        $scope.editUser = function() {
            APIClient.updateUser($scope.model).then(
                function(response) {
                    $scope.successMessage = "¡Profile edited successfully!";
                    $scope.errorMessage = false;
                    $scope.updateForm.$setPristine();
                    console.log("Usuario editado correctamente", response);
                },
                function(err) {
                    $scope.errorMessage = "Something is wrong,try again please";
                    $scope.successMessage = false;
                    console.log("Fallo al actualizar usuario", err);
                }
            );
        };
    }]);
