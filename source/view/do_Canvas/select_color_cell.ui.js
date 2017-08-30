var page = sm("do_Page");
var rootView = ui("$");
var do_Label_color = ui("do_Label_color");
var do_ALayout_Root = ui("do_ALayout_Root")
rootView.setMapping({
    "do_Label_color.bgColor":"bgColor"
});

do_ALayout_Root.on("touch",function(){
	page.fire("select_color",{"bgColor":do_Label_color.bgColor});
})


