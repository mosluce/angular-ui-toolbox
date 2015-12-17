(function () {
    var app = angular.module('ccmosInputMask', []);

    app.directive('ccmosInputMask', [function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attr, ngModel) {
                var settings = scope.$eval(attr.settings) || {};

                if (typeof settings.autoUnmask === 'undefined')
                    settings.autoUnmask = true;

                element.inputmask(attr.ccmosInputMask, settings);
            }
        }
    }]);
})();