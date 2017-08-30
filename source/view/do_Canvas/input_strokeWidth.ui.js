//点击底层alayout隐藏当前页面
ui("$").on("touch",function(){
	sm("do_Page").hideKeyboard();
	ui("$").visible = false;
})
ui("$").visible = false;

ui("do_ALayout_main").on("touch",function(){
	sm("do_Page").hideKeyboard();
	//避免点击do_ALayout_main区域隐藏当前输入页面
})

//page事件传递参数，将当前设置的画笔宽度传过来显示在输入框里
sm("do_Page").on("trans_strokeWidth", function(_data){
	ui("do_TextField_strokeWidth").text = _data;
});

//点击取消按钮隐藏当前输入页面
ui("do_Button_no").on("touch",function(){
	ui("$").visible = false;
})

//点击确定按钮，将当前输入框输入的值传递到index页面，给do_Canvas的画笔宽度属性赋值
ui("do_Button_yes").on("touch",function(){
	if (ui("do_TextField_strokeWidth").text == "") return sm("do_Notification").toast("请输入画笔宽度");
	ui("$").visible = false;
	sm("do_Page").fire("new_strokeWidth",ui("do_TextField_strokeWidth").text);
})