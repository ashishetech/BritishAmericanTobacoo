var app = angular.module("invisionApp");
app.factory("getDataFactory", function(configuration, $resource) {
    return {
        sendData: function(url) {
            return $resource(configuration.apihost + url)
        }
    }
});
