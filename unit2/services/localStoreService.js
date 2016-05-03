angular.module('myapp').factory('localStoreService', [function () {
  var _data = null;
  var service = {
      saveToStore: function (model) {
        sessionStorage.myappStore = angular.toJson(model);
        _data = angular.fromJson(sessionStorage.myappStore);
        return _data;
      },

      getFromStore: function () {
        if(_data) {
          return _data;
        }

        _data = angular.fromJson(sessionStorage.myappStore);
        return _data;
      }
  }

  return service;
}]);
