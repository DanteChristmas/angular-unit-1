angular.module('directives-sample', [])
  .directive('elementDirective', ['$log', function($log) {
    return {
      restrict: 'C',
      template: "<h1>Hello World!</h1>"
    }
  }]);
