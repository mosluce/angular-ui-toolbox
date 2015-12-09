(function () {
    var toolbox = angular.module('ccmosWizard', []);

    toolbox.directive('ccmosWizard', ['$compile', function ($compile) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                var settings = scope.$eval(attr.settings);

                element.wrapInner('<div class="wizard-wrapper">');
                var steps = element.children('.wizard-wrapper').steps(settings);
                $compile(steps)(scope);
            }
        }

    }]);
})();