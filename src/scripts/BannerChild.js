var BannerChild=React.createClass({
	render:function(){
		return(
          <div className="swiper-slide"><img src={this.props.name.imgSrc}/></div>
		)
	},
	componentDidMount:function(){
		 mySwiper = new Swiper('#swhome',{
         pagination : '.swiper-pagination',
         autoplay:3000, 
         loop:true,
         autoplayDisableOnInteraction : true   

    })
	}
})
module.exports=BannerChild;


