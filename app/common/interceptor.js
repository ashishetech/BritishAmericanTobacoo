var app = angular.module('batApp');
app.factory('Interceptor', function() {
    return {
        request: function(config) {
            return config;
            console.log('cjnsjkncd')

        }
    }
});
