//related to header.ui.ui
var root = ui("$");// 或者var root = ui("root");
root.setMapping({
	// ui的id.ui.属性：绑定到一个变量
	"title.text" : "title_value",
	"menu.bgColor" : "menu_bg_value"
})

var app = sm("do_App");
var page = sm("do_Page");
var close = ui("close");
// 定义点击事件
close.on("touch", function() {
	app.closePage();
})
// 定义android的物理返回键事件
page.on("back", function(data) {
	app.closePage();
})

var button = ui("menu");
button.on("touch", function() {
	page.fire("click_menu","我是从header来的数据");
});