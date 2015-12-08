(function () {
    angular.module('uiSelect2', [])
        .directive('uiSelect2', ['$timeout', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, element, attr) {
                    $timeout(function () {
                        var settings = scope.$eval(attr.settings) || {};
                        element.select2(settings);
                    });
                }
            }
        }]);
})();