
var BannerChild=require("./BannerChild");
var Nav=require("./nav");
var Banner=React.createClass({
	getDefaultProps:function(){
     return {
     	"url":'/api/banner'
     }
	},
    getInitialState:function(){
    	return{
    		"reset":""
    	}
    },
    componentWillMount:function(){
    	var This=this;
    	fetch(this.props.url).then(response=>response.json())
    		.then(data=>
                 This.setState({  	
                 	"reset":data
                 })                	
    			)
    		.catch(e=>console.log("Oops,error",e))
    },
    render:function(){
    	var arr=[];
    	var reset=this.state.reset;
    	if(reset){
    		for(var i=0;i<reset.length;i++){
    			arr.push(<BannerChild name={reset[i]} key={i}/>)
    		}
    	}
    	return(
            <div className="banner">
				<div className="swiper-container" id="swhome">
			        <div className="swiper-wrapper">
			         	{arr}
			        </div>
			  	  <div className="swiper-pagination"></div>
			    </div>
			  	 <Nav />
			</div>
    		)
    }
})
module.exports=Banner;
