(function () {
    var app = angular.module('ccmosInputMask', []);

    app.directive('ccmosInputMask', [function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attr, ngModel) {
                element.inputmask(attr.ccmosInputMask);
            }
        }
    }]);
})();