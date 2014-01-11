module.exports = function(grunt) {
    grunt.registerTask('build', ['jshint', 'less', 'requirejs', 'copyto', 'i18n']);
};