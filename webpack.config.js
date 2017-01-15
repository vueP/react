var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');

module.exports = {
	entry:__dirname + '/src/app.js',
	output:{
		path:__dirname + '/prd/',
		filename: 'bundle.js'
	},
	devtool:'source-map',
	module:{
		loaders:[
			{
				test:/\.js$/,
				exclude: /node_modules/,
				loader:'babel-loader',
				query:{
					presets:['es2015','react']
				}
			},
			{
				test:/\.scss$/,
				loader:ET.extract('style-loader','css-loader?modules&localIdentName=[hash:base64:5]&-url!sass')
			}
		]
	},
	devServer:{
		contentBase:__dirname + '/prd',
		port:80,
		host:'localhost',
		proxy:{
			'/api':{
				target:'http://localhost:9000',
				pathRewrite:{
					'^/api':''
				}
			}
		}
	},
	plugins:[
		new ET('bundle.css')
	]
}
