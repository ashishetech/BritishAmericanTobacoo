var app = angular.module("invisionApp");
app.factory('Interceptor', function() {
    return {
        request: function(config) {
            return config;
            console.log("cjnsjkncd")

        }
    }
});
