import style from '../styles/usage/module/list.scss';
import Tab1 from './list_tab1.js';
import Tab2 from './list_tab2.js';
var List = React.createClass({
	render:function(){
		return(
			<div className={style.list}>
				<div className={style.header}>
					<div className={style.search}>
					</div>
				</div>
				<div className={style.section}>
					<ul className={style.tab}>
						<li>分类</li>
						<li>商家</li>
					</ul>
					<div className="swiper-container" id="swiper">
					    <div className="swiper-wrapper">
					        <div className="swiper-slide"><Tab1 /></div>
					        <div className="swiper-slide"><Tab2 /></div>
					    </div>
						<div className="swiper-scrollbar"></div>
					</div>
				</div>
			</div>
		)
	},
	componentDidMount : function(){
		 Swiper = new Swiper('#swiper',{
			scrollbar:'.swiper-scrollbar' ,
			scrollbarHide:false,
	  	}); 
	}
})
export default List;