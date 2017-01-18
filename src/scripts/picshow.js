var PicChild=require("./picchild");
var PicShow=React.createClass({
		getDefaultProps:function(){
			return{
              "url":"/api/picshow"
			}
		},
		getInitialState:function(){
			return{
				"res":""
			}
		},
		componentWillMount:function(){
			var This=this;
			fetch(this.props.url).then(response=>response.json())
			.then(data=> 
				This.setState({
                   "res":data
				})
            )
           .catch(e=>console.log("Oops,error,e"))
		},
        render:function(){ 
        	var arr=[];
        	var res=this.state.res;
        	if(res){
        		for(var i=0;i<res.length;i++){
        			arr.push(<PicChild pic={res[i]} key={i}/>)
        		}
        	}
		 return(  
             <div className="picShow">
                <ul>
                   {arr}
                </ul>
             </div>
			)
	}
})
module.exports=PicShow;