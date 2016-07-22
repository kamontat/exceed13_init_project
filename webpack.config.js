var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './main.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: ['react-hot', 'babel', 'babel-loader'],
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
      },
			{
				test: path.join(__dirname, 'es6'),
				loader: 'babel-loader'
			}
    ]
	},
};
