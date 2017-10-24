ui("do_ALayout_back").on("touch", function() {
	sm("do_App").closePage();
})
sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});



var do_ScrollView_1 = ui("do_ScrollView_1");

//screenShot截屏方法
ui("do_Button_screenshot").on("touch",function(){
	do_ScrollView_1.screenShot(function(data, e) {
		deviceone.print(data,"截屏图片")
	})
})

//scrollTo方法
ui("do_Button_scrollto").on("touch",function(){
	do_ScrollView_1.scrollTo(1000);
})

//toBegin方法
ui("do_Button_tobegin").on("touch",function(){
	do_ScrollView_1.toBegin();
})

//toEnd方法
ui("do_Button_toend").on("touch",function(){
	do_ScrollView_1.toEnd();
})

var notification;
//下载一个网络图片来模拟网络取数据
var http = mm("do_Http");
http.timeout = 30000;
http.contentType = "application/json";
http.url = "http://g.hiphotos.baidu.com/zhidao/pic/item/b17eca8065380cd79f8ccc3fa144ad3458828155.jpg";

var anim = mm("do_Animation");
//alpha动画效果
anim.fillAfter = true;
anim.alpha({
	delay: 500,
	duration : 500,
	alphaFrom : 1,
	alphaTo : 0
}, "id1");

//rebound方法:headerview或footerview复位，通常下拉或上拉刷新处理数据后需要调用这个方法恢复状态
http.on("success", function(data) {
	do_ScrollView_1.rebound();
	//显示一个刷新数据个数的通知，动画再隐藏
	if(!notification){
		ui("$").add("notification",
               "source://view/do_ScrollView/refresh_notification.ui",
				 0, 0);
		notification = ui("notification");
	}else{
		notification.visible = true;
	}
	notification.animate(anim, function(data, e) {
		notification.visible = false;
	})
});

//事件----------------------------------------
//pull下拉headerview事件
do_ScrollView_1.on("pull", function(data) {
	deviceone.print(JSON.stringify(data),"pull事件")
	sm("do_Page").fire("mypull", data);//触发一个自定义事件给headerview
	if (data.state == 2) {// 下拉到一定位置松手开始刷新数据
		http.download("data://temp.png");
	}
})

//push上拉footerview事件
do_ScrollView_1.on("push", function(data) {
	deviceone.print(JSON.stringify(data),"push事件")
	sm("do_Page").fire("mypush", data);//触发一个自定义事件给footerview
	if (data.state == 2) {
		sm("do_Notification").toast("刷新完毕！")
		do_ScrollView_1.rebound();
	}
})

//scroll事件
do_ScrollView_1.on("scroll", function(data) {
	deviceone.print(JSON.stringify(data),"scroll事件")
})





