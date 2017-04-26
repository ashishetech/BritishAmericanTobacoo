'use strict'

angular.module('batApp', ['ui.router', 'ngResource', 'ngStorage', 'ngMaterial'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login')
        $stateProvider
            .state('menuTemplate', {
                url: '/menuTemplate',
                templateUrl: 'components/template/menuTemplate.html',
                controller: 'TemplateController as template'
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
    })
