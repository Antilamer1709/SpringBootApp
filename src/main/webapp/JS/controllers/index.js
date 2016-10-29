angular.module('mvcApp').controller('IndexCtrl', ['$scope', '$rootScope', 'UserService', '$route', '$location', '$window', 'ROLES', 'ngToast', 'CommonService', function ($scope, $rootScope, UserService, $route, $location, $window, ROLES, ngToast, CommonService) {

    $rootScope.home = true;
    $rootScope.bands = false;
    $scope.active = "active";
    $scope.user = {};
    $scope.user.username = "";
    $scope.user.logged = false;


    ngToast.settings.horizontalPosition = 'center';

    $scope.submitRegistration = function () {
        UserService.registration($scope.registration, function (res) {
            CommonService.showToast('success', 'Registration success');
            $scope.getLoggerUser();
        }, function (err) {
            $rootScope.error = err;
        })
    };
    $scope.submitLogin = function () {
        UserService.login($scope.login, function (res) {
            $scope.getLoggerUser();
        }, function (err) {
            $rootScope.error = err;
        })
    };

    $scope.getLoggerUser = function () {
        UserService.getLoggedUser(function (res) {
            $rootScope.user = res;
            $scope.user.username = res.username;
            $scope.user.logged = res.logged;
            $rootScope.user.role = res.role;
            $scope.isAdmin = $rootScope.user.role == ROLES.ADMIN || $rootScope.user.role == ROLES.SUPER_ADMIN;
        }, function (err) {
            $rootScope.error = err;
        })
    }
    $scope.getLoggerUser();
}]);