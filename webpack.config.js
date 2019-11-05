const path = require('path');
const bundleConfig = require('./bundle.config.json');

// from good tutorial: https://www.tutorialspoint.com/babeljs/babeljs_working_babel_with_jsx.htm

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        // resolve end up with a full path - resillient to file moving up/down
        path: path.resolve(__dirname, 'dev'),
        filename: 'main_bundle.js'
    },
    // mode instructs webpack how to bundle - for minimum size & max efficiency (production), or for more info and easier development (development)
    mode: bundleConfig.isProd ? 'production' : 'development',

    // Enable sourcemaps for debugging webpack's output.
    devtool: bundleConfig.isProd ? '' : 'source-map',
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    // it's the react preset the convert JSX to JS
                    // presets: ['es2015','react']
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    resolve: {
        // we need to tell webpack how to look for imported files where we've left the extension off
        extensions: ['.js', '.jsx']
    }
};
