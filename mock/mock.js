
var list_tab1 = require('./list_tab1.json');
var list_tab2 = require('./list_tab2.json');
var banner=require("./banner.json");
var picshow=require("./picshow.json");

module.exports = function(){
	return {
		"list_tab1":list_tab1,
		"list_tab2":list_tab2,
		"banner":banner,
		"picshow":picshow
	}
}