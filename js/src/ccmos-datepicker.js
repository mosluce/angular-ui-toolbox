(function () {
    angular.module('ccmosDatepicker', [])
        .directive('ccmosDatepicker', ['$timeout', function ($timeout) {
            return {
                restrict: 'E',
                require: 'ngModel',
                replace: true,
                template: '' +
                '<div class="input-group date">' +
                '<input type="text" class="form-control">' +
                '<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>' +
                '</div>',
                link: function (scope, element, attr, ngModel) {
                    $timeout(function () {
                        var settings = scope.$eval(attr.settings) || {};

                        var dp = element.datepicker(settings);

                        dp.datepicker().on('changeDate', function () {
                            var ndate = dp.datepicker('getDate');

                            if (ndate != ngModel.$viewValue) {
                                scope.$apply(function () {
                                    ngModel.$setViewValue(ndate);
                                });
                            }
                        });

                        dp.datepicker('update', ngModel.$viewValue);

                        scope.$watch(attr.ngModel, function (date) {
                            if (date) dp.datepicker('update', date);
                        });
                    });
                }
            }
        }]);
})();