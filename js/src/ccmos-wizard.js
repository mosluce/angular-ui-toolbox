(function () {
    var toolbox = angular.module('ccmosWizard', []);

    toolbox.directive('ccmosWizard', ['$compile', function ($compile) {
        var steps;

        return {
            restrict: 'A',
            controller: ['$scope', function ($scope) {
                $scope.$on('ccmos.wizard.first', function () {
                    while (steps.steps('getCurrentIndex') != 0) {
                        steps.steps('previous');
                    }
                });
            }],
            compile: function (element, attr) {
                element.wrapInner('<div class="wizard-wrapper">');

                var labels = {};
                attr.bodyTag = attr.bodyTag || 'fieldset';

                for (var key in attr) {
                    if (/^label/.test(key)) {
                        labels[key.replace(/^label/, '').toLowerCase()] = attr[key];
                    }
                }

                attr.labels = labels;

                steps = element.children('.wizard-wrapper').steps(attr);

                return {
                    pre: function (scope, element, attr) {
                    },
                    post: function (scope, element, attr) {
                        var events = scope.$eval(attr.events) || {};

                        steps.on('stepChanging', events.onStepChanging);
                        steps.on('stepChanged', events.onStepChanged);
                        steps.on('finishing', events.onFinishing);
                        steps.on('finished', events.onFinished);
                        steps.on('canceled', events.onCanceled);
                    }
                }
            }
        }

    }]);
})();