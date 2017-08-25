var do_BarcodeView = ui("do_BarcodeView_1");

sm("do_Page").on("back",function(){
	sm("do_App").closePage();
});

sm("do_Page").on("loaded",function(){
	//启动扫描
	do_BarcodeView.start(function(data) {
		if (data) deviceone.print(JSON.stringify(data),"扫描结果");
	});
})

//设置扫描的区域 150,150,300,300,设置后需要调用start方法重新启动扫描才可以生效
ui("do_Button_setscanarea").on("touch",function(){
	do_BarcodeView.scanArea = "150,150,300,300";
	do_BarcodeView.start(function(data) {
		if (data)
			deviceone.print(JSON.stringify(data), "扫描结果");
	});
})

// 开启闪光灯
ui("do_Button_on").on("touch",function(){
	do_BarcodeView.flash("on");
});
//关闭闪光灯
ui("do_Button_off").on("touch",function(){
	do_BarcodeView.flash("off");
});