module.exports = {
    build: {
        options: {
            yuicompress: true,
            paths: ['public/css']
        },
        files: {
            '.build/css/app.css': 'public/css/app.less'
        }
    }
};