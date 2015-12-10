/**
 * Created by mosluce on 2015/12/10.
 */
(function () {
    angular.module('ccmosPopover', [])
        .directive('ccmosPopover', [function () {
            return {
                restrict: 'A',
                link: function (scope, element, attr) {
                    var settings = scope.$eval(attr.settings) || {};

                    element.popover(settings);

                    scope.$watch(attr.show, function (show) {
                        element.popover(show ? 'show' : 'hide');
                    });
                }
            }
        }]);

})();