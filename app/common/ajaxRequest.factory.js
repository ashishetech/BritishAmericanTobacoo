var app = angular.module('batApp');
app.factory('getDataFactory', function(configuration, $resource) {
    return {
        sendData: function(url) {
            return $resource(configuration.apihost + url)
        }
    }
});
