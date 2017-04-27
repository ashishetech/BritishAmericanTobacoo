
'use strict'
angular.module('batApp', ['ui.router', 'ngResource', 'ngStorage', 'ngMaterial'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/addOutlet')
      $stateProvider
            .state('template', {
              url: '/template',
              templateUrl: 'components/template/template.html'
            })
            .state('login', {
              url: '/login',
              templateUrl: 'components/login/login.html',
              controller: 'LoginController as login'
            })
            .state('outletViewTable', {
              url: '/outletViewTable',
              templateUrl: 'components/outlets/outletView.html',
              controller: 'viewOutletController as batCtrl'
            })
            .state('addOutlet', {
              url: '/addOutlet',
              templateUrl: 'components/addOutlet/addOutlet.html',
              controller: 'addOutletController as addOutletCtrl'

            })
    })
