var webpack=require('webpack');
var ET=require("extract-text-webpack-plugin");
module.exports={
	entry:__dirname+'/src/app.js',
	output:{
		path:__dirname+'/prd/',
		filename:'bundle.js'
	},
	devtool:'source-map',
	module:{
		loaders:[
		{
           test:/\.css$/,
           loader:'style-loader!css-loader',
         },
         {
           test:/\.js$/,
           loader:'jsx-loader'
         },
         {
           test:/\.scss$/,
           loader:ET.extract('style','css!sass')
         },
         {
          test:/\.string$/,
          loader:'string'
         },
         {
          test:/\.(png|jpg)$/,
          loader:'url?limit=40000'
         }
		]
	},
	devServer:{
      contentBase:__dirname+'/prd',
      port:80,
      host:'localhost',
      inline:true,
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
	   // new webpack.optimize.UglifyJsPlugin(),
      new ET('bundle.css'),
	]

}