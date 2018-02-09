// Get the path to the application directory using the NodeJS path module
var path = require('path');


// Define the settings for webpack
module.exports = {

   /*==========================================================

    Define where webpackcan find the very first script file.
    We use thepath module to get the current directory we are in
    Find the src folder and tack on the main javascript file

   ===========================================================*/
    entry: path.resolve(__dirname, 'src') + '/app/index.js',


    /*==========================================================

    Within the entry javascript file, we might have multiple require
    statements bringing in functionality from other files within the
    application.

    The output definition allows webpack bundle all those files into
    a single file and the first thing we do is define where we will want
    this file to be saved which is in the "dist/app" folder.

    The next step is to define the name this bundled file will carry.
    Webpack will create this location once it runs

    The publicPath option allows us to reference the app folder
    without appending the folder location of dist.

   ===========================================================*/
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },


    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }

};
