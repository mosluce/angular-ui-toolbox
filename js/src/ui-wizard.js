(function () {
    var toolbox = angular.module('uiWizard', []);

    toolbox.directive('uiWizard', ['$compile', function ($compile) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                var options = scope.$eval(attr.options);

                element.wrapInner('<div class="wizard-wrapper">');
                var steps = element.children('.wizard-wrapper').steps(options);
                $compile(steps)(scope);
            }
        }

    }]);
})();