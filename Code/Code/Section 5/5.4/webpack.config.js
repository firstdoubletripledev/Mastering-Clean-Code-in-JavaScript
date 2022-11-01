var outputPath = __dirname +  '/dist/';

module.exports = {
    entry: './app/app.js',
    output: {
        path: outputPath,
        filename: 'bundle.js'
    }
}