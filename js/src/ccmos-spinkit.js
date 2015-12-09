(function () {
    angular.module('ccmosSpinkit', [])
        .directive('ccmosSkRotatingPlane', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'js/src/ccmos-spinkit-templates/sk-rotating-plane.html'
            }
        }])
        .directive('ccmosSkDoubleBounce', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'js/src/ccmos-spinkit-templates/sk-double-bounce.html'
            }
        }])
        .directive('ccmosSkWave', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'js/src/ccmos-spinkit-templates/sk-wave.html'
            }
        }])
        .directive('ccmosSkWanderingCubes', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'js/src/ccmos-spinkit-templates/sk-wandering-cubes.html'
            }
        }])
        .directive('ccmosSkChasingDots', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'js/src/ccmos-spinkit-templates/sk-chasing-dots.html'
            }
        }])
        .directive('ccmosSkCircle', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'js/src/ccmos-spinkit-templates/sk-circle.html'
            }
        }])
        .directive('ccmosSkCubeGrid', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'js/src/ccmos-spinkit-templates/sk-cube-grid.html'
            }
        }])
        .directive('ccmosSkFadingCircle', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'js/src/ccmos-spinkit-templates/sk-fading-circle.html'
            }
        }])
        .directive('ccmosSkFoldingCube', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'js/src/ccmos-spinkit-templates/sk-folding-cube.html'
            }
        }])
        .directive('ccmosSkSpinnerPulse', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'js/src/ccmos-spinkit-templates/sk-spinner-pulse.html'
            }
        }])
        .directive('ccmosSkThreeBounce', [function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'js/src/ccmos-spinkit-templates/sk-three-bounce.html'
            }
        }])
})();