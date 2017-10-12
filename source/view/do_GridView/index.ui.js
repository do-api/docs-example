var root = ui("$");
sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});

var do_GridView = ui("do_GridView_1");
var do_ListData = mm("do_ListData");

// 属性----------------------------------------
//items:GridView显示内容
var _datas = [ {
	template : 0,
	image : "source://view/do_GridView/image/video.png"
}, {
	template : 1,
	image : "source://view/do_GridView/image/video_det.png",
	title : "第二条数据"
},{
	template : 0,
	image : "source://view/do_GridView/image/video.png"
}, {
	template : 1,
	image : "source://view/do_GridView/image/video_det.png",
	title : "第四条数据"
},{
	template : 0,
	image : "source://view/do_GridView/image/video.png"
}, {
	template : 1,
	image : "source://view/do_GridView/image/video_det.png",
	title : "第六条数据"
}]
ui("do_Button_item").on("touch",function(){
	do_GridView.items = _datas;
})



// numColumns:GridView对应的列数
do_GridView.numColumns = 3;

// 方法----------------------------------------
// bindItems:绑定item的数据
ui("do_Button_bind").on("touch",function(){
	do_ListData.addData(_datas);
	do_GridView.bindItems(do_ListData);
})


//refreshItems:刷新item数据
ui("do_Button_update").on("touch",function(){
	do_ListData.updateOne(1, {
		template : 1,
		image : "source://view/do_GridView/image/video_det.png",
		title : "更新数据"
	})
	do_GridView.refreshItems([1]); //也可使用do_GridView.refreshItems()刷新所有数据
})


var info;
//下载一个网络图片来模拟网络取数据
var http = mm("do_Http");
http.timeout = 30000;
http.contentType = "application/json";
http.url = "http://g.hiphotos.baidu.com/zhidao/pic/item/b17eca8065380cd79f8ccc3fa144ad3458828155.jpg";

var anim = mm("do_Animation");
// alpha动画效果
anim.fillAfter = true;
anim.alpha({
	delay: 500,
	duration : 500,
	alphaFrom : 1,
	alphaTo : 0
}, "id1");

//rebound:headerview复位，下拉刷新处理数据后需要调用这个方法恢复状态
http.on("success", function(data) {
	do_GridView.rebound();
	do_GridView.refreshItems();
	//显示一个刷新数据个数的通知，动画再隐藏
	if(!info){
		root.add("info",
                 "source://view/do_GridView/refresh_notification.ui",
				 0, 0);
		info = ui("info");
	}else{
		info.visible = true;
	}
	info.animate(anim, function(data, e) {
		info.visible = false;
	})
});

//事件----------------------------------------
//pull下拉headerview事件
do_GridView.on("pull", function(data) {
	deviceone.print(JSON.stringify(data),"pull事件")
	if (data.state == 2) {// 下拉到一定位置松手开始刷新数据
		http.download("data://temp.png");
	}
})


//longTouch:长按cell触发
do_GridView.on("longTouch",function(_data){
	deviceone.print(JSON.stringify(_data),"longTouch事件")
})

//longTouch1:长按cell触发
do_GridView.on("longTouch1",function(_data){
	deviceone.print(JSON.stringify(_data),"longTouch1事件")
})

//scroll:滑动事件
do_GridView.on("scroll",function(_data){
	deviceone.print(JSON.stringify(_data),"scroll事件")
})

//touch事件
do_GridView.on("touch",function(_data){
	deviceone.print(JSON.stringify(_data),"touch事件")
})

//touch1事件
do_GridView.on("touch1",function(_data){
	deviceone.print(JSON.stringify(_data),"touch1事件")
})

