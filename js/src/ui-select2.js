(function () {
    angular.module('uiSelect2', [])
        .directive('uiSelect2', ['$timeout', function ($timeout) {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function (scope, element, attr, model) {
                    $timeout(function () {
                        var setting = scope.$eval(attr.setting) || {};
                        element.select2(setting);
                    });
                }
            }
        }]);
})();