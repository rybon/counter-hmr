var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
}).listen(8080, 'localhost', function (error) {
    if (error) {
        console.log(error);
    }

    console.log('Listening at localhost:8080');
});
