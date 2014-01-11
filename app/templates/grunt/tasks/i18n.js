module.exports = function(grunt) {
    grunt.registerTask('i18n', ['clean', 'makara', 'dustjs', 'clean:tmp']);
};