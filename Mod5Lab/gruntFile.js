module.exports = function(grunt){

    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        uglify : {
            options: {},
            build: {
                src: 'lintTest.js',
                dest: 'dist-grunt/lintTest.min.js'
            }
        },
        jshint: {
            files: ['lintTest.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
              globals: {
                jQuery: true
              }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default',['jshint','uglify']);
};