module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            options: {
                banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: {
                    'js/build/ui-wizard.min.js': ['bower_components/jquery.steps/build/jquery.steps.js', 'js/src/ui-wizard.js'],
                    'js/build/ui-select2.min.js': ['bower_components/select2/dist/js/select2.full.js', 'js/src/ui-select2.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
};