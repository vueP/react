import style from '../styles/usage/module/list_tab1.scss';
import Tabli from './tab_li.js';

var Tab2 = React.createClass({
	getDefaultProps : function(){
		return {
			"url" : "/api/list_tab2"
		}
	},
	getInitialState : function(){
		return{
			"reset" : ""	
		}
	},
	componentWillMount : function(){
		var that = this;
		fetch(that.props.url).then(response => response.json())
			.then(data =>that.setState({
				"reset":data
			}) )
			.catch(e => console.log("error",e))
	},
	render:function(){
		var arr = [];
		var reset = this.state.reset;
		if(reset){
			for( var i=0;i<reset.length;i++){
				arr.push(<Tabli name={reset[i]} key={i}/>)
			}
		}
		return(
			<ul>
				{arr}
			</ul>
		)
	}
})

export default Tab2;