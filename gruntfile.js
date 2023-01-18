module.exports = (grunt) => {
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.initConfig({
        eslint: {
            target: ['index.js', 'queue.test.js']
        },
        mochaTest: {
            files: ['queue.test.js']
        },
        mocha_istanbul: {
            coverage: {
                src: './',
                options: {
                    mask: 'queue.test.js'
                }
            }
        }
    });

    grunt.registerTask('lint', ['eslint']);
    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('coverage', ['mocha_istanbul']);
};
