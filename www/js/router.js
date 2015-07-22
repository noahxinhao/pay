angular.module('app.router').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
    url: '/main',
    templateUrl: 'tpl/main.html',
    controller:"mainCtrl"
  })
  $urlRouterProvider.otherwise('/main');
});