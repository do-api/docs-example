//related to crop.ui

ui("do_ALayout_back").on("touch", function() {
	sm("do_App").closePage();
});
sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});

var do_ImageCropView = ui("do_ImageCropView_1");


//1.属性----------------------------------------------------
//source属性
do_ImageCropView.source = "source://view/do_ImageCropView/image/1.jpg";

//cropArea属性
//do_ImageCropView.cropArea = "50,50";


//2.方法----------------------------------------------------
//crop方法
ui("do_ALayout_ok").on("touch",function(){
	do_ImageCropView.crop(function(data, e) {
		deviceone.print(data);
	})
})

