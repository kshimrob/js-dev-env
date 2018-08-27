import path from 'path';

export default {
    // enables some debugging information when build is run
    debug: true,
    // higher quality source map settings take longer to generate
    devtool: 'inline-source-map',
    // hides files that are being bundling
    noInfo: false,
    // entrypoints to application. __dirname is global magic of node
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [],
    module: {
        // teaches webpack how to handle different file types
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
            {test: /\.css$/, loaders: ['style', 'css']}
        ]
    }
}