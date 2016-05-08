var app = angular.module('MyApp', ['MyApp.controllers', 'ngRoute']);
app.config(['routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateURL: 'views/home.html',
        controller: 'homeController'
    })
    .when('/philosophy', {
        templateURL: 'views/philosophy.html',
        controller: 'philosophyControler'
    })
    .when('/performance', {
        templateURL: 'views/performance.html',
        controller: 'performanceController'
    })
    .when('/team', {
        templateURL: 'views/team.html',
        controller: 'teamController'
    })
    .when('/contact', {
        templateURL: 'views/contact.html',
        controller: 'contactController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);