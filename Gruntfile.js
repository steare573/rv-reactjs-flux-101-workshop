/**
 * Grunt file used for building, testing, etc
 *
 * @param  {[type]} grunt [description]
 */
module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    filesTest: [
      'test/**/*.test.js'
    ],

    filesGrunt: [
      'Gruntfile.js'
    ],

    filesSrc: [
      'src/**/*.js',
      'src/**/*.jsx'
    ],

    filesAll: [
      '<%= filesTest %>',
      '<%= filesGrunt %>',
      '<%= filesSrc %>'
    ],

    clean: {
      build: ['dest/']
    },

    webpack: {
      app: require('./webpack.config.js')
    },
    // note jshint not yet configured
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: '<%= filesAll %>',
      test: '<%= filesTest %>',
      src: '<% = filesSrc %>',
      changedfile: []
    },
    // note jscs not yet setup
    jscs: {
      all: {
        src: '<%= filesAll %>',
        options: {
          config: '.jscsrc'
        }
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: ['should', './test/compiler.js'],
          growl: true
        },
        src: ['<%= filesTest %>']
      }
    }

  });

  grunt.registerTask('build', ['clean', 'webpack:app']);
  grunt.registerTask('test', ['mochaTest:test']);
  grunt.registerTask('lint', ['jshint:all', 'jscs:all']);
}