var root = ui("$");
sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});

var do_ListView = ui("do_ListView_1");
var do_ListData = mm("do_ListData");

// 属性----------------------------------------
// bounces:反弹效果(只支持iOS平台，为false时没有上拉下拉的反弹效果)
do_ListView.bounces = false;


// templates:Cell对应的模板UI文件组
do_ListView.templates = "source://view/do_ListView/list_cell0.ui,source://view/do_ListView/list_cell1.ui,source://view/do_ListView/list_cell2.ui";

// 方法----------------------------------------
// bindItems:绑定item的数据
var datas = [
		{
			template : 0,
			icon : "source://view/do_ListView/image/default.png",
			Content : "十月，最美是枫叶。枫叶红了，漫山红遍、层林尽染;晚风习习，闭上眼，满脑子都是河湖碧透泉瀑流清般的诗情画意。 月已落下，乌鸦仍然在啼叫着，幕色朦胧漫天霜色，夜泊枫桥的张继对着江边的枫树和船上的渔火独自感叹，辗转反侧。满希望。",
			CreateByName : "张小二",
			CreateTime : "2017-10-7 10:35"
		}, {
			template : 0,
			icon : "source://view/do_ListView/image/default.png",
			Content : "万花都落尽 一树红叶烧  谁怜惟薄力 添与江山饶。",
			CreateByName : "张小四",
			CreateTime : "2017-10-9 10:35"
		}, {
			template : 0,
			icon : "source://view/do_ListView/image/default.png",
			Content : "远上寒山石径斜，白云生处有人家。停车坐爱枫林晚，霜叶红于二月花。",
			CreateByName : "张小五",
			CreateTime : "2017-10-10 10:35"
		}, {
			template : 1,
			type : "期刊分类",
			type_arrs : [ {
				name : "(遴选)核心"
			}, {
				name : "科技核心"
			}, {
				name : "中文核心"
			} ]
		}, {
			template : 1,
			type : "级别",
			type_arrs : [ {
				name : "国家级"
			}, {
				name : "省级"
			} ]
		}, {
			template : 1,
			type : "第几期",
			type_arrs : [ {
				name : "十月第1期"
			}, {
				name : "十月第2期"
			} ]
		}, {
			template : 2
		} ];

do_ListData.addData(datas);
do_ListView.bindItems(do_ListData);


//refreshItems:刷新item数据
ui("do_Button_update").on("touch",function(){
	do_ListData.updateOne(0, {
		template : 0,
		icon : "source://view/do_ListView/image/default.png",
		Content : "更新内容",
		CreateByName : "张小二",
		CreateTime : "2017-10-7 10:35"
	})
	do_ListView.refreshItems();
})


// scrollToPosition:滚动到特定位置
do_ListView.scrollToPosition({position:1,isSmooth:true})

//showHeader:当设置isHeaderVisible=true，自动显示HeaderView，并触发pull事件，windows平台不支持
do_ListView.showHeader();


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

//rebound:headerview或footerview复位，通常下拉或上拉刷新后处理数据后需要调用这个方法恢复状态
http.on("success", function(data) {
	do_ListView.rebound();
	do_ListView.refreshItems();
	//显示一个刷新数据个数的通知，动画再隐藏
	if(!info){
		root.add("info",
                 "source://view/do_ListView/refresh_notification.ui",
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
do_ListView.on("pull", function(data) {
	deviceone.print(JSON.stringify(data),"pull事件")
	sm("do_Page").fire("mypull", data);//触发一个自定义事件给headerview
	if (data.state == 2) {// 下拉到一定位置松手开始刷新数据
		http.download("data://temp.png");
	}
})

//push上拉footerview事件
do_ListView.on("push", function(data) {
	deviceone.print(JSON.stringify(data),"push事件")
	sm("do_Page").fire("mypush", data);//触发一个自定义事件给footerview
	if (data.state == 2) {
		sm("do_Notification").toast("数据已加载完！")
		do_ListView.rebound();
	}
})

//longTouch:长按cell触发
do_ListView.on("longTouch",function(_data){
	deviceone.print(JSON.stringify(_data),"longTouch事件")
})

//longTouch1:长按cell触发
do_ListView.on("longTouch1",function(_data){
	deviceone.print(JSON.stringify(_data),"longTouch1事件")
})

//scroll:滑动事件
do_ListView.on("scroll",function(_data){
	deviceone.print(JSON.stringify(_data),"scroll事件")
})

//touch:滑动事件
do_ListView.on("touch",function(_data){
	deviceone.print(JSON.stringify(_data),"touch事件")
})

//touch1:滑动事件
do_ListView.on("touch1",function(_data){
	deviceone.print(JSON.stringify(_data),"touch1事件")
})

//sizeChanged:组件尺寸改变事件
do_ListView.on("sizeChanged",function(_data){
	deviceone.print(JSON.stringify(_data),"sizeChanged事件")
})