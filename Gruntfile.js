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

  grunt.initConfig({

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
    }

  });

  grunt.registerTask('build', ['clean', 'webpack:app']);
}