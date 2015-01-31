module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            allFiles: [
                'GruntFile.js',
                'components/**/**.js',
                'phonegap/**/**.js',
            ]
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'components/**/**.js',
                dest: 'phonegap/js/app.min.js'
            }
        },
        less: {
            development: {
                options: {
                    paths: ["components"]
                },
                files: {
                    "phonegap/css/app.min.css": "components/**/**.less"
                }
            }
        },
        lesslint: {
            src: ['components/**/**.less']
        },

        styleguide: {
            options: {
                name: "test guide name",
                framework: {
                    name: 'kss',
                    options: {
                        name: "Book style guide",
                        css: 'guide-template/guide-template.css',
                        js: 'guide-template/guide-template.js'
                    }

                },
                template: {
                    src: 'guide-template/kss-template'
                    //'guide-template'
                    
                }

            },
            all: {
                files: [{
                    'styleguide': 'components/**/*.less'
                }]
            }
        },
        watch: {
            files: ['components/**/*', 'phonegap/**/*', 'GruntFile.js'],
            tasks: ['jshint', 'lesslint', 'styleguide'],
        }


    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-lesslint');
    grunt.loadNpmTasks('grunt-styleguide');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'uglify', 'less', 'lesslint', 'styleguide', 'watch']);

};