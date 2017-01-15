import tab from '../styles/usage/module/tab_li.scss';

var Tabli = React.createClass({
	render:function(){
		var prop = this.props.name;
		return(
			<li className={tab.tabli}>
				<div><img src={prop.img}/></div>
				<p>{prop.name}</p>
			</li>
		)
	}
});

export default Tabli;