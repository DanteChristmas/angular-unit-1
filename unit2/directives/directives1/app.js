angular.module('directives-sample', [])
  .directive('elementDirective', ['$log', function($log) {
    return {
      template: "<h1>Hello World!</h1>"
    }
  }]);
