module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            options: {
                banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: {
                    'js/build/ccmos-wizard.min.js': ['bower_components/jquery.steps/build/jquery.steps.js', 'js/src/ccmos-wizard.js'],
                    'js/build/ccmos-select2.min.js': ['bower_components/select2/dist/js/select2.full.js', 'js/src/ccmos-select2.js'],
                    'js/build/ccmos-datepicker.min.js': ['bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js', 'js/src/ccmos-datepicker.js'],
                    'js/build/ccmos-checkbox.min.js': ['bower_components/iCheck/icheck.min.js', 'js/src/ccmos-checkbox.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
};