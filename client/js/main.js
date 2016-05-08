var app = angular.module('MyApp', ['MyApp.controllers', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
    })
    .when('/philosophy', {
        templateUrl: 'views/philosophy.html',
        controller: 'philosophyControler'
    })
    .when('/performance', {
        templateUrl: 'views/performance.html',
        controller: 'performanceController'
    })
    .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'teamController'
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);