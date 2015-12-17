(function () {
    angular.module('ccmosSelect2', [])
        .directive('ccmosSelect2', ['$timeout', function ($timeout) {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function (scope, element, attr, ngModel) {
                    $timeout(function () {
                        var settings = scope.$eval(attr.settings) || {};
                        element.select2(settings);
                        element.on('select2-removed', function() {
                            scope.$apply(function() {
                                ngModel.$setViewValue(undefined);
                            })
                        });
                    });
                }
            }
        }]);
})();