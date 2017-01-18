var Footer=require("./footer");

var LayOut=React.createClass({
	render:function(){
       return(
            <div id="cute">
               <div id="wrapper">
				{this.props.children}
               </div>
               <div id="footer">
					<Footer />
			   </div> 
             </div>
       	)
	}

})
module.exports=LayOut;