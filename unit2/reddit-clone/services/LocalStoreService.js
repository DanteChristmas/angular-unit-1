angular.module('reddit-clone')
.service('LocalStoreService', ['$log',
function ($log) {
  var service = {
    find: function (key) {
      $log.info('Checking localstore for key: ' + key);
      return angular.fromJson(localStorage[key]);
    },
    set: function (key, payload) {
      $log.info('Setting localstore value for key: ' + key);
      localStorage[key] = angular.toJson(payload);
    }
  };

  return service;
}])
