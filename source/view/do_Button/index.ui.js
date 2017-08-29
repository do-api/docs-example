var do_Button = ui("do_Button_1");

sm("do_Page").on("back",function(){
	sm("do_App").closePage();
});


//设置按钮enabled属性为true
do_Button.enabled = true;



// 触发touch事件，按下并在按钮范围抬起，触发该事件
do_Button.on("touch", function() {
	// 设置bgImage属性，安卓给button设置背景图片时，组件设置圆角没有效果。因为所有border的圆角都是假的，相当于给了一个圆角的背景图片。
	do_Button.bgImage = "source://view/do_Button/backgroud.png";
	// 设置fontColor属性,值格式为：8位16进制字符，前6位是RGB颜色值，后两位是透明度（Alpha）
	do_Button.fontColor = "FF0000FF";
	// 设置fontSize属性
	do_Button.fontSize = 35;
	// 设置fontStyle属性,包含4种类型：normal：常规; bold：粗体; italic：斜体; bold_italic：粗斜体（iOS平台不支持）
	do_Button.fontStyle = "italic";
})


//触发touchDown事件，按钮范围内按下即可触发
do_Button.on("touchDown",function(){
	//设置按钮的text属性
	do_Button.text = "触发touchDown事件";
	//设置按钮的border属性,border值格式为"颜色值，宽度，圆角"
	do_Button.border = "FF0000FF,1,[20,20,20,20]";
})


//触发touchDown事件，按钮范围内按下即可触发
do_Button.on("touchUp",function(){
	//设置按钮的text属性
	do_Button.text = "触发touchUp事件";
})
