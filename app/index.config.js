angular.module('batApp').config(function ($httpProvider) {
  $httpProvider.interceptors.push('Interceptor')
})
