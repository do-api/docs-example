sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});

var do_GestureView = ui("do_GestureView_1");

//手指在触摸屏上迅速移动，并松开的动作，松开时触发
do_GestureView.on("fling",function(_data){
	ui("do_Label_fling").text = _data;
	deviceone.print(JSON.stringify(_data),"fling事件返回值")
})

//长按触发该事件
do_GestureView.on("longTouch",function(_data){
	ui("do_Label_longtouch").text = _data;
	ui("do_Button_1").x  = _data.x;
	ui("do_Button_1").y  = _data.y;
	ui("do_Button_1").redraw();
	deviceone.print(JSON.stringify(_data),"longTouch事件返回值")
})

//手指在触摸屏上移动时触发
do_GestureView.on("move",function(_data){
	ui("do_Label_move").text = _data;
	ui("do_Button_1").x  = _data.x;
	ui("do_Button_1").y  = _data.y;
	ui("do_Button_1").redraw();
	deviceone.print(JSON.stringify(_data),"move事件返回值")
})

//按下并在组件范围抬起，触发该事件
do_GestureView.on("touch",function(_data){
	ui("do_Label_touch").text = _data;
	ui("do_Button_1").x  = _data.x;
	ui("do_Button_1").y  = _data.y;
	ui("do_Button_1").redraw();
	deviceone.print(JSON.stringify(_data),"touch事件返回值")
})

//组件范围内按下即可触发
do_GestureView.on("touchDown",function(_data){
	ui("do_Label_touchdown").text = _data;
	deviceone.print(JSON.stringify(_data),"touchDown事件返回值")
})

//一旦按下，手指离开即触发，不论是否在组件范围内
do_GestureView.on("touchUp",function(_data){
	ui("do_Label_touchup").text = _data;
	deviceone.print(JSON.stringify(_data),"touchUp事件返回值")
})