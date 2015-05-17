/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      all: {
        src: ['src/**/*.js']
      }
    },
    watch: {
      lib_test: {
        files: 'src/**/*.js',
        tasks: ['jshint:all']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
