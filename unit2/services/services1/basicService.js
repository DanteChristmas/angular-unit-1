angular.module('myapp').service('basicService', ['ValidateUtilService', function (_validate) {
    var _greeting = "hello!"
    var factory = {
      getGreeting: function() {
        return _greeting;
      },

      setGreeting: function (newGreeting) {
        _greeting = newGreeting;
        return _greeting;
      }
    }

    return factory;
}]);
