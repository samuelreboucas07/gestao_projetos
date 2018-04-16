var tempoProjeto = angular.module('tempoProjeto', ['ngRoute']);

tempoProjeto.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
        .when('/',{
          templateUrl:'/views/home.html',
          controller: 'homeCtrl'
        })
        .when('/page2',{
          templateUrl:'/views/page2.html',
          controller: 'page2Ctrl'
        })
        .otherwise({
          redirectTo: '/'
        });

      //  $locationProvider.html5Mode(true);
}]);
