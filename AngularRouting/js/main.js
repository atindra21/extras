var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/one", {
        templateUrl : "route1.html"
    })
    .when("/two", {
        templateUrl : "route2.html"
    })
});