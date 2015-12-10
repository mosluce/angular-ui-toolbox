(function () {
    var toolbox = angular.module('ccmosWizard', []);

    toolbox.directive('ccmosWizard', ['$compile', function ($compile) {
        return {
            restrict: 'A',
            compile: function (element, attr) {
                element.wrapInner('<div class="wizard-wrapper">');

                var settings = {
                    bodyTag: attr.bodyTag || 'fieldset',
                    labels: {}
                };

                if (attr.labelNext) settings.labels.next = attr.labelNext;
                if (attr.labelProvious) settings.labels.previous = attr.labelProvious;
                if (attr.labelFinish) settings.labels.finish = attr.labelFinish;

                var steps = element.children('.wizard-wrapper').steps(settings);

                return {
                    pre: function (scope, element, attr) {
                    },
                    post: function (scope, element, attr) {
                        var events = scope.$eval(attr.events) || {};

                        steps.on('stepChanging', events.onStepChanging);
                        steps.on('stepChanged', events.onStepChanged);
                        steps.on('finishing', events.onFinishing);
                        steps.on('finished', events.onFinished);
                    }
                }
            }
        }

    }]);
})();