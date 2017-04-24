angular.module('batApp').factory('Interceptor', () => ({
  request(config) {
    config.url += '?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6NywiaWF0IjoxNDkzMDM1NTM5LCJleHAiOjE0OTMwMzkxMzl9.P9kHC3GK-06JUXam5aS-CLd5vs8kfXP5eGQjyZVYGs0';
    return config;
  },
}));
