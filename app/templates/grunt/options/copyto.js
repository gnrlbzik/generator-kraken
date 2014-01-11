module.exports = {
    build: {
        files: [
            { cwd: 'public', src: ['**/*'], dest: '.build/' }
        ],
        options: {
            ignore: [
                'public/css/**/*',
                'public/js/**/*',
                'public/templates/**/*'
            ]
        }
    }
};