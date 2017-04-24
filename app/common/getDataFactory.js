'use strict'

angular.module('batApp')
.factory('getDataFactory', function(configuration, $resource) {
    return {
        login: function(url) {
            return $resource(configuration.apihost + url)
        }
    }
})
