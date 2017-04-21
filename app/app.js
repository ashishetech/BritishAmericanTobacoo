'use strict'

var app = angular.module('batApp', ['ui.router', 'ngResource', 'ngStorage'])
app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login')
  $stateProvider
.state('template', {
  url : '/template',
  templateUrl: 'components/template/template.html'
})
.state('login', {
  url: '/login',
  templateUrl: 'components/login/login.html',
  controller: 'loginController as login'
})
})
