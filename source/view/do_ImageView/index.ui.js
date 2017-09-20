ui("do_ALayout_back").on("touch", function() {
	sm("do_App").closePage();
})
sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});



var do_ImageView = ui("do_ImageView_1");

//属性----------------------------------------
//1.animation
do_ImageView.animation = "fade";

//2.cacheType
//该属性只允许在设计器修改

//3.defaultImage
do_ImageView.defaultImage = "source://view/do_ImageCropView/image/1.jpg";

//4.enabled
do_ImageView.enabled = true;

//5.radius(像素值，为0时表示不是圆角图片；当同时设置了border属性，则radius属性失效（已废弃，建议使用border属性）)
do_ImageView.radius = 50;

//6.scale
//该属性只允许在设计器修改

//7.source
do_ImageView.source = "http://photocdn.sohu.com/20161128/Img474303098.jpg?qq-pf-to=pcqq.discussion";

//8.border	
//do_ImageView.border = "ffffffff,1,[175,175,175,175]"
	
	
	
//2.方法--------------------------------
var bitmap = mm("do_Bitmap");
do_ImageView.setBitmap(bitmap);

//3.事件--------------------------------
do_ImageView.on("touch",function(){
	//支持添加文本水印和图片水印，添加水印之前必须先loadFile
	bitmap.loadFile(do_ImageView.source, function(data, e) {
		if (data) {
			bitmap.addWatermark("text", "deviceone", 50, 20, "8080FFFF", "bold", "underline",80, function(_data, e) {
				if (_data) {
					var _image = "data://save/" + sm("do_Global").getTime() + ".png";
					bitmap.save("PNG", 100, _image, function(bitmap_image, e) {
						if (bitmap_image) {
							do_ImageView.source = bitmap_image;
							deviceone.print(bitmap_image)
						}
					})
				}
			});
		}
	})
})








