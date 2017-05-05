'use strict'

angular.module('batApp', ['ui.router', 'ngResource', 'ngStorage', 'ngMaterial', 'angularMoment'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/login')
      $stateProvider
            .state('menuTemplate', {
              templateUrl: 'components/template/menuTemplate.html',
              controller: 'TemplateController as template'
            })
            .state('login', {
              url: '/login',
              templateUrl: 'components/login/login.html',
              controller: 'LoginController as login'
            })
            .state('menuTemplate.outletViewTable', {
              url: '/outletViewTable',
              templateUrl: 'components/outlets/outletView.html',
              controller: 'viewOutletController as batCtrl'
            })
            .state('menuTemplate.addOutlet', {
              url: '/addOutlet',
              templateUrl: 'components/addOutlet/addOutlet.html',
              controller: 'addOutletController as addOutletCtrl'

            })
            .state('menuTemplate.tmeViewTable', {
              url: '/tmeViewTable',
              templateUrl: 'components/tme/tmeView.html',
              controller: 'viewTmeController as viewTmeCtrl'
            })
            .state('menuTemplate.addTme', {
              url: '/addTme',
              templateUrl: 'components/addTme/addTme.html',
              controller: 'addTmeController as addTmeCtrl'
            })
            .state('menuTemplate.skuViewTable', {
              url: '/skuViewTable',
              templateUrl: 'components/sku/skuView.html',
              controller: 'viewSkuController as viewSkuCtrl'
            })
            .state('menuTemplate.addSku', {
              url: '/addSku',
              templateUrl: 'components/addSku/addSku.html',
              controller: 'addSkuController as addSkuCtrl'

            })
    })
