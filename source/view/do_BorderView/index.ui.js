sm("do_Page").on("back",function(){
	sm("do_App").closePage();
});

var do_BorderView = ui("do_BorderView_1");

//对topView属性赋值
ui("do_Button_addtopview").on("touch",function(){
	do_BorderView.topView = "source://view/do_BorderView/topView.ui";
	do_BorderView.redraw();
})
//对rightView属性赋值
ui("do_Button_addrightview").on("touch",function(){
	do_BorderView.rightView = "source://view/do_BorderView/rightView.ui";
	do_BorderView.redraw();
})
//对bottomView属性赋值
ui("do_Button_addbottomview").on("touch",function(){
	do_BorderView.bottomView = "source://view/do_BorderView/bottomView.ui";
	do_BorderView.redraw();
})

//对leftView属性赋值
ui("do_Button_addleftview").on("touch",function(){
	do_BorderView.leftView = "source://view/do_BorderView/leftView.ui";
	do_BorderView.redraw();
})
//对centerView属性赋值
ui("do_Button_addcenterview").on("touch",function(){
	do_BorderView.centerView = "source://view/do_BorderView/centerView.ui";
	do_BorderView.redraw();
})


//对do_BorderView的items属性赋值
ui("do_Button_additems").on("touch", function() {
	var items = {
		"topView" : {
			"template" : "source://view/do_BorderView/topView.ui",
			"title_value" : "topView赋值",
			"rootbg_value" : "4B9EF9FF"
		},
		"centerView" : {
			"template" : "source://view/do_BorderView/centerView.ui",
			"text_value" : "centerView赋值"
		}
	}
	do_BorderView.items = JSON.stringify(items);
})


sm("do_Page").on("getaddress",function(){
//	获取子组件的内存地址
	var ui_address = do_BorderView.getView({direction:"top"});
	deviceone.print(ui_address,"获取的子组件地址");
});
