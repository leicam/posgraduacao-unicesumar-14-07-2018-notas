window.app = window.angular.module('notas', ['ngRoute'])

window.app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'view/home.html',
            controller: 'homeController'
        })
        .when('/nota', {
            templateUrl: 'view/nota.html',
            controller: 'notaController'
        })
        .when('/nota/:id', {
            templateUrl: 'view/nota.html',
            controller: 'notaController'
        })
        .when('/excluir/nota/:id', {
            templateUrl: 'view/excluir-nota.html',
            controller: 'notaController'
        })
        .otherwise('/')
})