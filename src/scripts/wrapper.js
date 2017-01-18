var End=require("./end");
var Header=require("./header");
var Banner=require("./banner");
var PicShow=require("./picshow");


var Wrapper=React.createClass({
	render:function(){
		return(
           <div className="wrap">
              <div id="header">
				<Header /> 
			  </div>
              <div id="banner">
				<Banner /> 
			  </div>
              <div id="picshow">
				<PicShow /> 
			  </div>
              <End />
           </div>

			)
	}
})
module.exports=Wrapper;