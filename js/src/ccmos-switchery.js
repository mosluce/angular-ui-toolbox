(function () {
    var app = angular.module('ccmosSwitchery', []);

    app.directive('ccmosSwitchery', ['$timeout', '$parse', function ($timeout, $parse) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attr, ngModel) {
                var settings = $parse(attr.settings)(scope);
                var sw = new Switchery(element[0], settings);

                element.on('change', function (e) {
                    $timeout(function () {
                        ngModel.$setViewValue(e.target.checked);
                    });
                });

                sw.setPosition($parse(attr.ngModel)(scope));
            }
        }
    }]);
})();