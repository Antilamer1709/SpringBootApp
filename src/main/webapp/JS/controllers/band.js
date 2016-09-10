angular.module('mvcApp').controller('BandCtrl', ['$scope', '$rootScope', '$routeParams', 'BandService', function ($scope, $rootScope, $routeParams, BandService) {

    $scope.bandId = $routeParams.bandId;
    $scope.band;
    $scope.code = 'oHg5SJYRHA0';

    $scope.loadBand = function () {
        var params = {};
        params.id = $routeParams.bandId;
        BandService.getBand(params, function (res) {
                    if (res != undefined) {
                        $scope.band = res;
                    }
                }, function (err) {
                    $rootScope.error = err;
                }
            );
    };
    $scope.loadBand();

}]);