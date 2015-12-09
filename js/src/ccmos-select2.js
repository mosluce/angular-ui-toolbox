(function () {
    angular.module('ccmosSelect2', [])
        .directive('ccmosSelect2', ['$timeout', function ($timeout) {
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