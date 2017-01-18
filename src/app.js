require("./styles/module/index.scss");

import { Router, Route, IndexRoute,hashHistory } from 'react-router';
 //主页组件
var LayOut = require("./scripts/layout");

//主页子组件 第1,2,3,4页
var Home=require("./scripts/wrapper");
import List from "./scripts/list.js";
		var Swiper;
		var mySwiper;
ReactDOM.render((
	<Router history={hashHistory}>
	  <Route path="/" component={LayOut}>
		<IndexRoute component={Home}/>
		<Route path="/list" component={List}/>
	  </Route>
	</Router>
), document.getElementById('app'));