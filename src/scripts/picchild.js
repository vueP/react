var PicChild=React.createClass({
	render:function(){
		return(
          <li><i><img src={this.props.pic.imgP}/></i><b>{this.props.pic.title}</b></li>
			)
	}
})
module.exports=PicChild;