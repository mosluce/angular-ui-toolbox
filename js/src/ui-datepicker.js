(function () {
    angular.module('uiDatepicker', [])
        .directive('uiDatepicker', ['$timeout', function ($timeout) {
            return {
                restrict: 'A',
                scope: {
                    model: '=',
                    settings: '='
                },
                link: function (scope, elemnet, attr) {
                    $timeout(function () {
                        var settings = scope.settings || {};

                        elemnet.wrap('<div class="input-group date">').after('<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>');
                        var dp = elemnet.parent('.input-group.date').datepicker(settings);

                        dp.datepicker().on('changeDate', function () {
                            var ndate = dp.datepicker('getDate');

                            if (ndate != scope.model) {
                                scope.$apply(function () {
                                    scope.model = ndate;
                                });
                            }
                        });

                        dp.datepicker('update', scope.model);

                        scope.$watch(scope.model, function (date) {
                            if (date) dp.datepicker('update', date);
                        });
                    });
                }
            }
        }]);
})();