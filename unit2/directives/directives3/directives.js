angular.module('myapp').directive('listDir', ['$log', function ($log) {
  return {
    templateUrl: '/partials/list.html',
    scope: {
      list: '='
    },
    link: function (scope, element, attrs) {
      $log.info(scope);
      $log.info(element);
      $log.info(attrs);
      scope.newItem = {};

      scope.addItem = function () {
        scope.newItem.id = scope.list.length + 1;
        scope.list.push(scope.newItem);
        scope.newItem = {};
      }
    }
  }
}]);
