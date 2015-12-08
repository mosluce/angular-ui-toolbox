(function () {
    angular.module('uiDatepicker', [])
        .directive('uiDatepicker', [function () {
            return {
                restrict: 'A',
                link: function (scope, elemnet, attr) {
                    var settings = scope.$eval(attr.settings) || {};

                    elemnet.wrap('<div class="input-group date">').after('<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>');
                    elemnet.parent('.input-group.date').datepicker(settings);
                }
            }
        }]);
})();