module.exports = {
	entry: "./src/js/templates/App.jsx",
	output: {
		filename: "build/js/bundle.js"
	},
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: {
			test: /\.js?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel',
			query: {
				presets: ['react', 'es2015']
			}
		}
	}
}