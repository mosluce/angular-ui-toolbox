module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            build: {
                files: {
                    'js/build/ccmos-wizard.min.js': ['bower_components/jquery.steps/build/jquery.steps.js', 'js/src/ccmos-wizard.js'],
                    'js/build/ccmos-select2.min.js': ['bower_components/select2/dist/js/select2.full.js', 'js/src/ccmos-select2.js'],
                    'js/build/ccmos-datepicker.min.js': ['bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js', 'js/src/ccmos-datepicker.js'],
                    'js/build/ccmos-checkbox.min.js': ['bower_components/iCheck/icheck.min.js', 'js/src/ccmos-checkbox.js'],
                    'js/build/ccmos-spinkit.min.js': ['js/src/ccmos-spinkit.js', 'js/src/ccmos-spinkit-templates.js']
                }
            }
        },
        ngtemplates: {
            angularSpinkit: {
                src: ['js/src/ccmos-spinkit-templates/**.html'],
                dest: 'js/src/ccmos-spinkit-templates.js',
                options: {
                    module: 'ccmosSpinkit'
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'css/ccmos-datepicker.css': 'scss/ccmos-datepicker.scss',
                    'css/ccmos-select2.css': 'scss/ccmos-select2.scss',
                    'css/ccmos-spinkit.css': 'scss/ccmos-spinkit.scss',
                    'css/ccmos-wizard.css': 'scss/ccmos-wizard.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['ngtemplates', 'uglify', 'sass', 'cssmin']);
};