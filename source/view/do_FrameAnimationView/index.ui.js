sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});

var do_FrameAnimationView = ui("do_FrameAnimationView_1"); // 实例化do_FrameAnimationView组件


ui("do_Button_gif1").on("touch",function(){
	//开始动画,支持source://路径下的gif图片
	//repeat默认值为1执行一次动画效果，为-1或小于0时表示无限循环，为0时表示没有动画效果；windows平台不支持设置重复次数，只能循环播放
	do_FrameAnimationView.startGif({data:"source://view/do_FrameAnimationView/image/timg.gif", repeat:-1}); 
})

ui("do_Button_gif2").on("touch",function(){
	//开始动画,支持data://路径下的gif图片
	if (!sm("do_Storage").fileExist("data://gif/pic.gif")){
		sm("do_InitData").copyFile("initdata://pic.gif", "data://gif/pic.gif", function(_d, e) {
			if (_d) {
				do_FrameAnimationView.startGif({data:"data://gif/pic.gif", repeat:-1});  
			}
		})
	} else {
		do_FrameAnimationView.startGif({data:"data://gif/pic.gif", repeat:-1});
	}
})


ui("do_Button_image1").on("touch",function(){
	var imgs = [];
	for (var i = 1; i <= 8; i++) {
		imgs.push({path: "source://view/do_FrameAnimationView/image/" + i + ".png", duration: 100});//开始动画,支持source://路径下的图片
	}
	do_FrameAnimationView.startImages({data:imgs, repeat:-1}); //repeat默认值为1执行一次动画效果，为-1或小于0时表示无限循环，为0时表示没有动画效果
})

ui("do_Button_image2").on("touch",function(){
	var source_images = [],target_images = [];
	for (var i = 1; i <= 12; i++) {
		source_images.push("initdata://" + i + ".png");
	}
	for (var i = 1; i <= 12; i++) {
		target_images.push({path: "data://gif/image/" + i + ".png", duration: 100});
	}
	if (!sm("do_Storage").fileExist("data://gif/image/12.png")){   //data://gif/image/下已存在图片
		sm("do_InitData").copy(source_images, "data://gif/image/", function(_d, e) {
			if (_d) {  //拷贝文件成功
				do_FrameAnimationView.startImages({data:target_images, repeat:-1});   // 开始动画,支持data://路径下的图片
			}
		})
	} else {
		do_FrameAnimationView.startImages({data:target_images, repeat:-1});  // 开始动画,支持data://路径下的图片
	}
})


ui("do_Button_stop").on("touch",function(){
	do_FrameAnimationView.stop();  //停止动画
})