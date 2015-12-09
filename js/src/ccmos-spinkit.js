(function () {
    angular.module('ccmosSpinkit', [])
        .directive('ccmosSkRotatingPlane', [function () {
            return {
                restrict: 'E',
                replace: true,
                template: '<div class="sk-rotating-plane"></div>'
            }
        }])
        .directive('ccmosSkDoubleBounce', [function () {
            return {
                restrict: 'E',
                replace: true,
                template: '' +
                '<div class="sk-double-bounce">' +
                '<div class="sk-child sk-double-bounce1"></div>' +
                '<div class="sk-child sk-double-bounce2"></div>' +
                '</div>'
            }
        }])
        .directive('ccmosSkWave', [function () {
            return {
                restrict: 'E',
                //replace: true,
                link: function(scope, element, attr) {
                    var wave = $('<div class="sk-wave">');
                    wave.append($('<div class="sk-rect sk-rect1"></div>'));
                    wave.append($('<div class="sk-rect sk-rect2"></div>'));
                    wave.append($('<div class="sk-rect sk-rect3"></div>'));
                    wave.append($('<div class="sk-rect sk-rect4"></div>'));
                    wave.append($('<div class="sk-rect sk-rect5"></div>'));

                    element.append(wave);

                    wave.unwrap();
                }
            }
        }])
        .directive('ccmosSkWanderingCubes', [function () {
            return {
                restrict: 'E',
                replace: true,
                template: '' +
                '<div class="sk-wandering-cubes">' +
                '<div class="sk-cube sk-cube1"></div>' +
                '<div class="sk-cube sk-cube2"></div>' +
                '</div>'
            }
        }])
})();