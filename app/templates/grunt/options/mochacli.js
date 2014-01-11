module.exports = {
    src: ['test/*.js'],
    options: {
        globals: ['chai'],
        timeout: 6000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'spec'
    }
};