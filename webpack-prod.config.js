var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: [
		'./src/js/templates/App.js'
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: "bundle.js",
		publicPath: '/build/'
	},
	plugins: [
    	new webpack.optimize.DedupePlugin(),
	    new webpack.optimize.UglifyJsPlugin({
	      minimize: true,
	      compress: {
	        warnings: false
	      }
	    })
  	],
  	resolve: {
    	extensions: ['', '.js', '.jsx']
  	},
	module: {
		loaders: [
			// ES6 + JSX 
			{
				test: /\.js?$/,
				loader: 'babel',
				include: path.join(__dirname, 'src')
			},
			// Sass
			{
				test: /\.scss$/,
				loader: "style-loader!css-loader!sass-loader",
				include: path.join(__dirname, 'src')
			},
			// Flickity
			{
			    test: /(flickity|fizzy-ui-utils|get-size|unipointer)/,
			    loader: 'imports?define=>false&this=>window'
			}
		]
	}
}