var app = sm("do_App");
var page = sm("do_Page");
var close = ui("close");


var root = ui("$");// 或者var root = ui("root");
root.setMapping({
	// ui的id.ui.属性：绑定到一个变量
	"title.text" : "title_value",
	"root.bgColor" : "rootbg_value"
})


// 定义返回点击事件
close.on("touch", function() {
	app.closePage();
})


ui("do_Button_getaddress").on("touch",function(){
	page.fire("getaddress");
})
