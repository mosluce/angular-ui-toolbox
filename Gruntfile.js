module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            options: {
                banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: {
                    'js/build/ui-wizard.min.js': ['bower_components/jquery.steps/build/jquery.steps.js', 'js/src/ui-wizard.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
};