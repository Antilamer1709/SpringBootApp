angular.module('mvcApp', [])
    .constant('MODULE_NAME', "index")
    .config(['$routeSegmentProvider', '$routeProvider', function ($routeSegmentProvider, $routeProvider) {
        $routeSegmentProvider
            .when('/', 'index')
            .when('/index', 'index')
            .when('/configuration', 'configuration')

        $routeSegmentProvider.segment('index', {
            templateUrl: 'HTML/index.html',
            controller: 'IndexCtrl'
        });

        $routeProvider.otherwise({redirectTo: '/'});
    }]);
