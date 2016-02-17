module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Compile less files
    less: {
      dist: {
        files: {
          '<%= pkg.dist %>/css/app.css': '<%= pkg.src %>/css/app.less'
        }
      }
    },

    // Watch files and recompile if there any changes
    esteWatch: {
      options: {
        dirs: [
          '<%= pkg.src %>/css/**/',
        ]
      },
      less: function () {
        return ['less'];
      },
    },

    concurrent: {
      'compilers-dev': ['less'],
      'watchers': {
        tasks: ['esteWatch'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-este-watch');

  grunt.registerTask('core-dev', ['concurrent:compilers-dev', 'concurrent:watchers']);
  grunt.registerTask('dev', ['core-dev']);
};