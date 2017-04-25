angular.module('batApp').factory('Interceptor', () => ({
  request (config) {
    config.url += '?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6NywiaWF0IjoxNDkzMDk5NDY3LCJleHAiOjE0OTMxMDMwNjd9.7H4KTMK9nRAV1WOHu1Ml_mXeen-9imN5_8HHC4Zpfsk'
    return config
  }
}))
