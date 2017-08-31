var rootview = ui("$");

ui("do_ALayout_back").on("touch", function() {
	sm("do_App").closePage();
})
sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});

var do_CountDownLabel = ui("do_CountDownLabel_1");

ui("do_Button_countDown").on("touch",function(){
	//设置do_CountDownLabel的时间长度属性
	do_CountDownLabel.countDown = 10000;
});

ui("do_Button_fontColor").on("touch",function(){
	//设置do_CountDownLabel的字体颜色属性
	do_CountDownLabel.fontColor = "FFFFFFFF";
});

ui("do_Button_fontSize").on("touch",function(){
	//设置do_CountDownLabel的字体大小属性
	do_CountDownLabel.fontSize = 35;
});

//倒计时完成时触发该事件
do_CountDownLabel.on("finish",function(data){
	deviceone.print("触发倒计时完成事件")
})

