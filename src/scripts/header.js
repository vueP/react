var Header=React.createClass({
	render:function(){
		return(
           <ul>
             <li>
              <i className='yo-ico'>&#xe631;</i>
              <b>扫一扫</b>
             </li>
             <li>
                <p className='yo-ico'>&#xe501;</p>
                <span>眼都年货节</span>
             </li>
             <li>
              <i className='yo-ico'>&#xe69a;</i>
              <b>购物车</b>
             </li> 
           </ul>
			)
	}
})
module.exports=Header;