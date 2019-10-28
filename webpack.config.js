var path = require('path');

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
   mode:'development',
   module: {
      rules: [
         {
            test:/\.(js|jsx)$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader',
            query: {
                // it's the react preset the convert JSX to JS
                //presets: ['es2015','react']
                presets: ['@babel/preset-env','@babel/preset-react']
            }
         }
      ]
   }
};
