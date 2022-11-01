const uglifyjs = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: 'app.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        modules: [__dirname]
    },
    plugins: [
        new uglifyjs({
            
        })
    ]
}
