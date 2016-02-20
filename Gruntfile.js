module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // delete the dist folder
    clean: {
      es6: {
        src: './bumpcar/build'
      },
      js: {
        src: './fish/build'
      }
    },

    // Compile less files
    less: {
      dist: {
        files: {
          '<%= pkg.dist %>/css/app.css': '<%= pkg.src %>/css/app.less'
        }
      }
    },

    babel: {
      dev: {
        options: {
          sourceMap: true
        },
        files: [
          {
            expand: true,
            cwd: './bumpcar/src',
            src: ['**/*.js'],
            dest: './bumpcar/build',
            ext: '.js'
          },
          {
            expand: true,
            cwd: './fish/src',
            src: ['**/*.js'],
            dest: './fish/build',
            ext: '.js'
          }
        ]
      },
    },

    // Watch files and recompile if there any changes
    esteWatch: {
      options: {
        dirs: [
          '<%= pkg.src %>/css/**/',
          './bumpcar/src',
          './fish/src'
        ]
      },
      less: function () {
        return ['less'];
      },

      js: function () {
        return ['babel:dev'];
      },

      es6: function () {
        return ['babel:dev'];
      },
    },

    concurrent: {
      'compilers-dev': ['newer:babel:dev', 'less'],
      'watchers': {
        tasks: ['esteWatch'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-este-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('core-dev', ['clean', 'concurrent:compilers-dev', 'concurrent:watchers']);
  grunt.registerTask('core-dev-build', ['clean', 'concurrent:compilers-dev']);
  grunt.registerTask('dev', ['core-dev']);
  grunt.registerTask('build', ['core-dev-build']);
};