var app = angular.module('batApp', ['ui.router', 'ngResource'])
app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/outletViewTable')
  $stateProvider
  .state('outletViewTable', {
    url: '/outletViewTable',
    templateUrl: 'components/outlets/outletView.html',
    controller: 'viewOutletController',
    controllerAs:'OutletCtrl'
  })
})
