angular.module('batApp').factory('Interceptor', () => ({
  request (config) {
    config.url += '?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6NywiaWF0IjoxNDkzMDk1Njg3LCJleHAiOjE0OTMwOTkyODd9.ZGr01FCylZIaFsonh4mjKlXMTiEw_e_8vfvFRC4BgG4'
    return config
  }
}))
