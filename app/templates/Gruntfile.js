'use strict';

module.exports = function (grunt) {
    // Setup access to grunt env variables. Can be accessed via 'grunt.envvars'
    grunt.envvars = require('./grunt/envvars');

    // load all grunt plugin tasks matching the `grunt-*` pattern (see: https://github.com/sindresorhus/load-grunt-tasks)
    require('load-grunt-tasks')(grunt);

    // grunt-load-options: will load plugin options and tasks from /grunt/tasks & /grunt/options respective their names (see: https://github.com/chriszarate/grunt-load-options)

    // Load makara tasks
    grunt.loadTasks('./node_modules/makara/tasks/');
};