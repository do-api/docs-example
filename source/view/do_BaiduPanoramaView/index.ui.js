var do_BaiduPanoramaView = ui("do_BaiduPanoramaView_1");

sm("do_Page").on("back",function(){
	sm("do_App").closePage();
});


//设置全景图缩放级别为5
do_BaiduPanoramaView.zoomLevel = 5;
deviceone.print(do_BaiduPanoramaView.zoomLevel, "全景图缩放级别");

//设置全景图片的显示级别为3
do_BaiduPanoramaView.imageLevel = 1;
deviceone.print(do_BaiduPanoramaView.imageLevel, "全景图片显示级别");

//显示全景图
do_BaiduPanoramaView.showPanoramaView({
	"latitude" : "41.867335",
	"longitude" : "123.90583"
});

//添加一组缩略图标记
ui("do_Button_image").on("touch",function(){
	do_BaiduPanoramaView.addImageMarkers([ {
		"id" : "id1",
		"latitude" : "41.867335",
		"longitude" : "123.90583",
		"url" : "source://view/do_BaiduPanoramaView/location.png"
	}, {
		"id" : "id2",
		"latitude" : "41.857335",
		"longitude" : "123.90583",
		"url" : "source://view/do_BaiduPanoramaView/location.png"
	}, {
		"id" : "id3",
		"latitude" : "41.847335",
		"longitude" : "123.90583",
		"url" : "source://view/do_BaiduPanoramaView/location.png"
	}, {
		"id" : "id4",
		"latitude" : "41.837335",
		"longitude" : "123.90583",
		"url" : "source://view/do_BaiduPanoramaView/location.png"
	} ]);
})


//添加一组文本标记
ui("do_Button_text").on("touch",function(){
	do_BaiduPanoramaView.addTextMarkers([ {
		"id" : "01",
		"latitude" : "40.767335",
		"longitude" : "123.80583",
		"text" : "文字标记1",
		"fontColor" : "000000FF",
		"fontSize" : 30
	}, {
		"id" : "02",
		"latitude" : "40.667335",
		"longitude" : "124.70583",
		"text" : "文字标记2",
		"fontColor" : "FF0000FF",
		"fontSize" : 30
	}, {
		"id" : "03",
		"latitude" : "40.567335",
		"longitude" : "125.60583",
		"text" : "文字标记3",
		"fontColor" : "00FF00FF",
		"fontSize" : 20
	}, {
		"id" : "04",
		"latitude" : "40.467335",
		"longitude" : "126.50583",
		"text" : "文字标记4",
		"fontColor" : "FF8000FF",
		"fontSize" : 20
	}, {
		"id" : "05",
		"latitude" : "40.367335",
		"longitude" : "127.40583",
		"text" : "文字标记5",
		"fontColor" : "FF0080FF",
		"fontSize" : 20
	} ])
})


//移除当前全景图上添加的所有标记,全景图上添加的有标记时才可以使用删除所有标记的方法
ui("do_Button_remove1").on("touch", function() {
	do_BaiduPanoramaView.removeAll();
})

//移除一组指定标记，全景图上有对应标记的时候才可以使用
ui("do_Button_remove1").on("touch", function() {
	do_BaiduPanoramaView.removeMarker({
		ids : [ "01", "02", "03", "04", "05" ]
	});
})

//点击标记时触发该事件
do_BaiduPanoramaView.on("touchMarker", function(data) {
	deviceone.print(JSON.stringify(data), "点击标记");
});