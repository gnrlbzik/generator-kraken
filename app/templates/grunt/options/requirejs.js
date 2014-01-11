module.exports = {
    build: {
        options: {
            baseUrl: 'public/js',
            mainConfigFile: 'public/js/config.js',
            dir: '.build/js',
            optimize: 'uglify',
            modules: [{name: 'app'}]
        }
    }
};