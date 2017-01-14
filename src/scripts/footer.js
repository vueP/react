var Footer=React.createClass({
	render:function(){
		return(
            <ul>
              <li className='active'>
               <i className='yo-ico'>&#xe60a;</i>
               <b>首页</b>
              </li>
              <li>
               <i className='yo-ico'>&#xe63c;</i>
               <b>分类</b>
              </li>
              <li>
                <span><img src="/images/logo_01.png"/></span> 
              </li>
              <li>
               <i className='yo-ico'>&#xe69a;</i>
               <b>购物车</b>
              </li>
              <li>
               <i className='yo-ico'>&#xe722;</i>
               <b>我的</b>
              </li>
             </ul>
		)

	}
})
module.exports=Footer;

