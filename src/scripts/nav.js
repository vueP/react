var Nav=React.createClass({
	render:function(){
		return(
           <div className="nav">
              <ul>
                <li>
                   <i><img src="/images/nav4.png"/></i>
                   <b>热销</b>
                </li>
                 <li>
                   <i><img src="/images/nav1.png"/></i>
                   <b>新品</b>
                </li>
                 <li>
                   <i><img src="/images/nav2.png"/></i>
                   <b>优惠</b>
                </li>
                 <li>
                   <i><img src="/images/nav3.png"/></i>
                   <b>专享</b>
                </li>
              </ul>
           </div>
			)
	}
})
module.exports=Nav;