module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean:{
            clean: ['distribution/']
        },
        uglify: {
            options: {
                banner: '/*\n/  Author: Jeremy Carlsten \n/  Version: 0.1.1 \n*/\n'
            },
            dist: {
                files: [
                    {src: 'src/js/*.js', dest: 'distribution/gitDown-0.1.0.min.js'}
                ]
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        jasmine: {
          src: 'src/main/**/*.js',
            options: {
              specs: 'src/test/*Test.js',
              vendor: [
                "node_modules/jquery/dist/jquery.min.js",
                "node_modules/jasmine-ajax/lib/mock-ajax.js"
              ]
            }
        },
        watch:{
            scripts:{
                files: ['src/**/*.js', 'test/**/*.js'],
                tasks: ['default']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['clean', 'jshint', 'jasmine'])
    grunt.registerTask('default', ['test', 'uglify']);

};
