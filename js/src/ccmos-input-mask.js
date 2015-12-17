(function () {
    var app = angular.module('ccmosInputMask', []);

    app.directive('ccmosInputMask', [function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                var im = new Inputmask(attr.ccmosInputMask);
                im.mask(element[0]);
            }
        }
    }]);
})();