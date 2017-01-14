var End=require("./end");
var Wrapper=React.createClass({
	render:function(){
		return(
           <div className="wrap">
              <div id="header"></div>
              <div id="banner"></div>
              <div id="picshow"></div>
              <End />
           </div>

			)
	}
})
module.exports=Wrapper;