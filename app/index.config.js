var app = angular.module("invisionApp")
app.config(function($httpProvider) {
    $httpProvider.interceptors.push('Interceptor');
});
