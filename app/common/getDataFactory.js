'use strict'

angular.module('batApp')
.factory('getDataFactory', function(configuration, $resource) {
    return {
        sendData: function(url) {
            return $resource(configuration.apihost + url)
        }
    }
})
