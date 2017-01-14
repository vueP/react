/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	var LayOut = __webpack_require__(5);
	var Header=__webpack_require__(6);
	var Footer=__webpack_require__(7);
	var Wrapper=__webpack_require__(8);
	var Banner=__webpack_require__(9);
	var PicShow=__webpack_require__(12);
	ReactDOM.render(React.createElement(LayOut, null),document.getElementById("app"));
	ReactDOM.render(React.createElement(Footer, null),document.getElementById("footer"));
	ReactDOM.render(React.createElement(Wrapper, null),document.getElementById("wrapper"));
	ReactDOM.render(React.createElement(Header, null),document.getElementById("header"));
	ReactDOM.render(React.createElement(Banner, null),document.getElementById("banner"));
	ReactDOM.render(React.createElement(PicShow, null),document.getElementById("picshow"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	var LayOut=React.createClass({displayName: "LayOut",
		render:function(){
	       return(
	            React.createElement("div", {id: "cute"}, 
	               React.createElement("div", {id: "wrapper"}
	               ), 
	               React.createElement("div", {id: "footer"})
	             )
	       	)
		}
	
	})
	module.exports=LayOut;

/***/ },
/* 6 */
/***/ function(module, exports) {

	var Header=React.createClass({displayName: "Header",
		render:function(){
			return(
	           React.createElement("ul", null, 
	             React.createElement("li", null, 
	              React.createElement("i", {className: "yo-ico"}, ""), 
	              React.createElement("b", null, "扫一扫")
	             ), 
	             React.createElement("li", null, 
	                React.createElement("p", {className: "yo-ico"}, ""), 
	                React.createElement("span", null, "眼都年货节")
	             ), 
	             React.createElement("li", null, 
	              React.createElement("i", {className: "yo-ico"}, ""), 
	              React.createElement("b", null, "购物车")
	             )
	           )
				)
		}
	})
	module.exports=Header;

/***/ },
/* 7 */
/***/ function(module, exports) {

	var Footer=React.createClass({displayName: "Footer",
		render:function(){
			return(
	            React.createElement("ul", null, 
	              React.createElement("li", {className: "active"}, 
	               React.createElement("i", {className: "yo-ico"}, ""), 
	               React.createElement("b", null, "首页")
	              ), 
	              React.createElement("li", null, 
	               React.createElement("i", {className: "yo-ico"}, ""), 
	               React.createElement("b", null, "分类")
	              ), 
	              React.createElement("li", null, 
	                React.createElement("span", null, React.createElement("img", {src: "/images/logo_01.png"}))
	              ), 
	              React.createElement("li", null, 
	               React.createElement("i", {className: "yo-ico"}, ""), 
	               React.createElement("b", null, "购物车")
	              ), 
	              React.createElement("li", null, 
	               React.createElement("i", {className: "yo-ico"}, ""), 
	               React.createElement("b", null, "我的")
	              )
	             )
			)
	
		}
	})
	module.exports=Footer;
	


/***/ },
/* 8 */
/***/ function(module, exports) {

	var Wrapper=React.createClass({displayName: "Wrapper",
		render:function(){
			return(
	           React.createElement("div", {className: "wrap"}, 
	              React.createElement("div", {id: "header"}), 
	              React.createElement("div", {id: "banner"}), 
	              React.createElement("div", {id: "picshow"})
	           )
	
				)
		}
	})
	module.exports=Wrapper;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	
	var BannerChild=__webpack_require__(10);
	var Nav=__webpack_require__(11);
	var Banner=React.createClass({displayName: "Banner",
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
	    			arr.push(React.createElement(BannerChild, {name: reset[i], key: i}))
	    		}
	    	}
	    	return(
	            React.createElement("div", {className: "banner"}, 
					React.createElement("div", {className: "swiper-container"}, 
				        React.createElement("div", {className: "swiper-wrapper"}, 
				         	arr
				        ), 
				  	  React.createElement("div", {className: "swiper-pagination"})
				    ), 
				  	 React.createElement(Nav, null)
				)
	    		)
	    }
	})
	module.exports=Banner;


/***/ },
/* 10 */
/***/ function(module, exports) {

	var BannerChild=React.createClass({displayName: "BannerChild",
		render:function(){
			return(
	          React.createElement("div", {className: "swiper-slide"}, React.createElement("img", {src: this.props.name.imgSrc}))
			)
		},
		componentDidMount:function(){
			var mySwiper = new Swiper('.swiper-container',{
	         pagination : '.swiper-pagination',
	         autoplay:3000, 
	         loop:true,
	         autoplayDisableOnInteraction : true   
	
	    })
		}
	})
	module.exports=BannerChild;
	
	


/***/ },
/* 11 */
/***/ function(module, exports) {

	var Nav=React.createClass({displayName: "Nav",
		render:function(){
			return(
	           React.createElement("div", {className: "nav"}, 
	              React.createElement("ul", null, 
	                React.createElement("li", null, 
	                   React.createElement("i", null, React.createElement("img", {src: "/images/nav4.png"})), 
	                   React.createElement("b", null, "热销")
	                ), 
	                 React.createElement("li", null, 
	                   React.createElement("i", null, React.createElement("img", {src: "/images/nav1.png"})), 
	                   React.createElement("b", null, "新品")
	                ), 
	                 React.createElement("li", null, 
	                   React.createElement("i", null, React.createElement("img", {src: "/images/nav2.png"})), 
	                   React.createElement("b", null, "优惠")
	                ), 
	                 React.createElement("li", null, 
	                   React.createElement("i", null, React.createElement("img", {src: "/images/nav3.png"})), 
	                   React.createElement("b", null, "专享")
	                )
	              )
	           )
				)
		}
	})
	module.exports=Nav;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var PicChild=__webpack_require__(13);
	var PicShow=React.createClass({displayName: "PicShow",
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
	        			arr.push(React.createElement(PicChild, {pic: res[i], key: i}))
	        		}
	        	}
			 return(  
	             React.createElement("div", {className: "picShow"}, 
	                React.createElement("ul", null, 
	                   arr
	                )
	             )
				)
		}
	})
	module.exports=PicShow;

/***/ },
/* 13 */
/***/ function(module, exports) {

	var PicChild=React.createClass({displayName: "PicChild",
		render:function(){
			return(
	          React.createElement("li", null, React.createElement("i", null, React.createElement("img", {src: this.props.pic.imgP})), React.createElement("b", null, this.props.pic.title))
				)
		}
	})
	module.exports=PicChild;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map