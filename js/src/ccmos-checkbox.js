(function () {
    angular.module('ccmosCheckbox', [])
        .directive('ccmosCheckbox', ['$timeout', function ($timeout) {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function (scope, element, attr, ngModel) {
                    $timeout(function () {

                        function update(value) {
                            ngModel.$setViewValue(value);
                        }

                        var settings = scope.$eval(attr.settings);

                        element.iCheck(settings);

                        element.on('ifChanged', function (e) {
                            if (attr.type === 'checkbox') {
                                if (e.target.checked === ngModel.$viewValue) return;

                                scope.$apply(function () {
                                    update(e.target.checked);
                                });
                            } else {
                                if (attr.value === ngModel.$viewValue) return;

                                scope.$apply(function () {
                                    update(attr.value);
                                });
                            }
                        });

                        scope.$watch(attr.ngChecked, function (checked) {

                            if (attr.type === 'checkbox') {
                                update(checked ? true : false);
                            } else {
                                if (checked) update(attr.value);
                            }

                            element.iCheck('update');
                        });

                        scope.$watch(attr.ngModel, function(model) {
                            element.iCheck('update');
                        });
                    });
                }
            }
        }]);
})();