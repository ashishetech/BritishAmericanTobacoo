'use strict'

angular.module('batApp')
.factory('getDataFactory', function(configuration, $resource) {
    return {
        login: function() {
            return $resource(configuration.apihost + "/admin/login")
        }
    }
})
