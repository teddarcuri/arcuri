var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:3000',
		'webpack/hot/only-dev-server',
		'./src/js/templates/App.js'
	],
	devServer: {
  		historyApiFallback: true
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: "bundle.js",
		publicPath: '/build/'
	},
	plugins: [
    	new webpack.HotModuleReplacementPlugin()
  	],
	module: {
		loaders: [
			// ES6 + JSX 
			{
				test: /\.js?$/,
				loaders: ['react-hot', 'babel'],
				include: path.join(__dirname, 'src')
			},
			// Sass
			{
				test: /\.scss$/,
				loader: "style-loader!css-loader!sass-loader"
			},
			// Flickity
			{
			    test: /(flickity|fizzy-ui-utils|get-size|unipointer)/,
			    loader: 'imports?define=>false&this=>window'
			}
		]
	},
	node: {
  		fs: "empty"
	}
}