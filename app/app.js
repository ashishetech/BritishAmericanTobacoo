var app = angular.module('invisionApp', ['ui.router', 'ngResource'])
app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/outletViewTable')

  $stateProvider
        .state('register', {
          url: '/register',
          templateUrl: 'components/registration/registrationForm.html',
          controller: 'registrationController'
        })
.state('outletViewTable', {
  url: '/outletViewTable',
  templateUrl: 'components/outlets/outletView.html',
  controller: 'viewOutletController',
  controllerAs:'OutletCtrl'

})
        .state('login', {
          url: '/login',
          templateUrl: 'components/login/login.html'

        })
})
