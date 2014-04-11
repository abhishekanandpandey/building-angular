module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: ['src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    _: false,
                    $: false,
                    jasmine: false,
                    describe : false,
                    it : false,
                    expect: false,
                    before : false,
                    beforeEach : false,
                    after : false,
                    afterEach : false
                }
            }
        },
        jasmine: {
            unit: {
                src: 'src/**/*.js',
                options: {
                    specs: ['test/**/*.js'],
                    vendor: [
                        'node_modules/lodash/lodash.js',
                    ]
                }
            }
        },
        watch: {
            all: {
                files: ['src/**/*.js', 'test/**/*.js'],
                tasks: ['default']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //We will be linting and unit testing all the time. Lets register a task!
    grunt.registerTask('default', ['jshint', 'jasmine']);
};
