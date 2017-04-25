angular.module('batApp', ['ui.router', 'ngResource'])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/outletViewTable')
  $stateProvider
  .state('outletViewTable', {
    url: '/outletViewTable',
    templateUrl: 'components/outlets/outletView.html',
    controller: 'viewOutletController',
    controllerAs:'batCtrl'
  })
})
