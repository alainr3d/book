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
        clean :["styleguide"],
        less: {
            development: {
                options: {
                    paths: ["components"]
                },
                files: {
                    "phonegap/css/app.min.css": ["components/**/*.less"],
                    "components/docs/styleguide.css": ["components/**/*.less"]
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
                        name: "Book style guide"//,
                        //css: 'phonegap/css/app.min.css'
                    }

                },
                template: {
                    src: 'guide-template/book-kss-template'
                    //'guide-template'
                    
                }

            },
            dist: {

                files: {
                  'styleguide': 'components/docs/styleguide.css'
                }   

            }
        },
        watch: {
            files: ['components/**/*', 'phonegap/**/*', 'GruntFile.js','guide-template'],
            tasks: ['less','styleguide'],
        }


    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-lesslint');
    grunt.loadNpmTasks('grunt-styleguide');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'uglify', 'less', 'lesslint','watch']);
    grunt.registerTask('styles', ['clean','less','styleguide']);

};