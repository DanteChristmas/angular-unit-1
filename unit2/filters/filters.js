angular.module('filters-sample')
.filter('kebab', [function () {
  return function (input) {
    return input.replace(/_/g , "-");
  };
}])
.filter('flagged', [function () {
  return function (items, prop, flagState) {
    var filtered = [];
    angular.forEach(items, function (item) {
      if(item[prop] == flagState) {
        filtered.push(item);
      }
    });
    return filtered;
  }
}]);
