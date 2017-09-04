ui("$").setMapping({
	"do_Label_1.text":"middle_title"
})

var page = sm("do_Page");
var global = sm("do_Global");
var left = ui("left");
var right = ui("right");


left.on("touch",function(){
	page.fire("openleft");
})

right.on("touch",function(){
	page.fire("openright");
})
