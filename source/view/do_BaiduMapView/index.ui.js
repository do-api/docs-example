/**
 * related to index.ui
 * 
 * @Author : zxhuizhi@126.com
 * @Timestamp : 2017-08-24
 */

var do_BaiduMapView = ui("do_BaiduMapView_1");
var do_VideoView = ui("do_VideoView_1");

sm("do_Page").on("loaded", function() {
	do_VideoView.play();
});

// 属性
do_BaiduMapView.mapType = "standard"; // 地图类型

var addmark_i = 0,i = 0;
// 点击"增加标记"按钮添加标记
ui("do_Button_addmark").on("touch", function() {
	// 百度地图的addMarkers添加一组标记方法
	addmark_i = parseInt(addmark_i) + 1;
	do_BaiduMapView.addMarkers([ {
		"id" : addmark_i.toString(),    // id为string类型
		"latitude" : (39.915174 - addmark_i*0.03).toString(),
		"longitude" : (116.403901- addmark_i*0.03).toString(),
		"url" : "source://image/baidumapview/baidumapview_addmarks.png", // 缩略图的图片路径
		"info" : "描述信息"+addmark_i.toString(),
		"popup" : true,
		"textMarker" : {
			"text" : "添加的标记"+addmark_i,
			"fontColor" : "FF0000FF",
			"fontStyle" : "bold",
			"fontSize" : 20,
			"alignX" : "center",
			"alignY" : "center",
			"bgColor" : "00FFFFFF",
			"radius" : 0
		}
	} ]);
})

// 点击"增加圆形"按钮添加圆形
ui("do_Button_addOverlay0").on("touch", function() {
	// 百度地图的addOverlay添加集合图形方法
	i = parseInt(i) + 1;
	do_BaiduMapView.addOverlay({
		"type" : 0, // 圆形
		"data" : { // 圆形:需要中心点坐标(经纬度)和半径(单位:米)
			"latitude" : "39.915174",
			"longitude" : "116.403901",
			"radius" : "10000"
		},
		"id" : i.toString(), // 要添加的集合图形ID
		"fillColor" : "00000088", // 只有闭合图形才有填充颜色
		"strokeColor" : "FFFFFFFF", // 外边缘颜色
		"width" : 20, // 外边缘宽度
		"isDash" : true
	// 线条是否显示为虚线，android只有折线可以设置为虚线
	});
})

// 点击"增加折线"按钮添加折线
ui("do_Button_addOverlay1").on("touch", function() {
	// 百度地图的addOverlay添加集合图形方法
	i = parseInt(i) + 1;
	do_BaiduMapView.addOverlay({
		"type" : 1, // 折线
		"data" : [ { // 折线:每一个是一个经纬度点
			"latitude" : "39.916174",
			"longitude" : "116.413911"
		}, {
			"latitude" : "39.517164",
			"longitude" : "116.423921"
		}, {
			"latitude" : "39.915184",
			"longitude" : "116.433911"
		}, {
			"latitude" : "39.917154",
			"longitude" : "116.513921"
		} ],
		"strokeColor" : "FF0000FF",
		"id" : i.toString(), // 要添加的集合图形ID
		"width" : 5,
		"isDash" : false
	});
})

// 点击"增加多边形"按钮添加多边形
ui("do_Button_addOverlay2").on("touch", function() {
	// 百度地图的addOverlay添加集合图形方法
	i = parseInt(i) + 1;
	do_BaiduMapView.addOverlay({
		"type" : 2, // 多边形
		"data" : [ { // 多边形:每一个是一个经纬度点
			"latitude" : "39.915174",
			"longitude" : "116.403901",
		}, {
			"latitude" : "39.955174",
			"longitude" : "116.403901",
		}, {
			"latitude" : "39.615174",
			"longitude" : "116.603901",
		}, {
			"latitude" : "39.515174",
			"longitude" : "116.553901",
		}, {
			"latitude" : "39.915174",
			"longitude" : "116.403901",
		} ],
		"strokeColor" : "8000FFFF",
		"id" : i.toString(), // 要添加的集合图形ID
		"width" : 2,
		"isDash" : true
	});
})

// 点击"增加圆弧"按钮添加圆弧
ui("do_Button_addOverlay3").on("touch", function() {
	// 百度地图的addOverlay添加集合图形方法
	i = parseInt(i) + 1;
	do_BaiduMapView.addOverlay({
		"type" : 3, // 圆弧
		"data" : [ { // 圆弧:根据指定经纬度生成一段圆弧,指定的经纬度坐标点数组(需传入3个点),每一个是一个经纬度点
			"latitude" : "39.915174",
			"longitude" : "116.403901",
		}, {
			"latitude" : "39.905174",
			"longitude" : "116.002901",
		}, {
			"latitude" : "39.855174",
			"longitude" : "116.000001",
		} ],
		"strokeColor" : "00FFFFFF",
		"id" : i.toString(), // 要添加的集合图形ID
		"width" : 3,
		"isDash" : false
	});
})


// 点击"获取实际距离"按钮根据地图上两个点的坐标来获取两点之间实际直线距离
ui("do_Button_getDistance").on("touch",function(){
	var getDistance = do_BaiduMapView.getDistance({"startPoint":(39.915174,116.403901),"endPoint":(40.915174,117.403901)})
	deviceone.print(JSON.stringify(getDistance));    // 在设计器上logger里面打印返回来的数据
})

// 点击"移除标记"按钮移除一组指定标记
ui("do_Button_removeMarker").on("touch",function(){
	var removeMarker = do_BaiduMapView.removeMarker([addmark_i.toString()]);
	if (parseInt(addmark_i) <= 0) {
		addmark_i = 0;
	} else {
		addmark_i = parseInt(addmark_i) -1;
	}
});

// 点击"移除所有标记"按钮移除所有标记
ui("do_Button_removeAll").on("touch",function(){
	var removeAll = do_BaiduMapView.removeAll(); 
	i = 0;
	addmark_i = 0;
});

// 点击"移除一组图形"按钮移除一组图形集合
ui("do_Button_removeOverlay").on("touch",function(){
	var removeOverlay = do_BaiduMapView.removeOverlay([i.toString()]); 
	i = parseInt(i) - 1;
});

do_BaiduMapView.setCenter("39.915174", "116.403901");   // 一进页面设置中心点为北京

// 点击"设置中心点"按钮设置地图中心点
ui("do_Button_setCenter").on("touch",function(){
	var setCenter = do_BaiduMapView.setCenter("41.867335","123.90583"); // 设置地图中心点为抚顺
	deviceone.print(JSON.stringify(setCenter));
	if (setCenter == true) {
		sm("do_Notification").toast("中心点设置成功");
	} else {
		sm("do_Notification").toast("中心点设置失败");
	}
});

//点击"搜索服务"按钮搜索服务
ui("do_Button_poiSearch").on("touch",function(){
	do_BaiduMapView.poiSearch({
		"type" : 0,
		"keyword" : "北京",
		"param" : {
			city : "北京"
		},
		"pageIndex" : 0,
		"pageSize" : 10
	},function(data){
		deviceone.print("搜索服务poiSearch方法："+JSON.stringify(data));
	})
})

//点击"路线检索"按钮路线检索
ui("do_Button_routePlanSearch").on("touch",function(){
	do_BaiduMapView.routePlanSearch({
		"type" : "Drive",
		"startCityName" : "北京",
		"endCityName" : "北京",
		"startCitySite" : 39.721785+","+117.342488,
		"endCitySite" : 39.160025+","+117.193478
	},function(data){
		deviceone.print("路线检索routePlanSearch方法："+JSON.stringify(data));
	})
})

var cityID = "";
// 点击"获得所有热门城市"按钮获得所有热门城市
ui("do_Button_getHotCityList").on("touch",function(){
	var getHotCityList = do_BaiduMapView.getHotCityList(function(data){
		if (data) {
			cityID = data[0].cityID;
			sm("do_Notification").alert(data);
			deviceone.print("获得所有热门城市getHotCityList方法："+JSON.stringify(data));
		}
	});
});

// 点击"开始下载离线地图"按钮开始下载离线地图
ui("do_Button_startDownload").on("touch",function(){
	do_BaiduMapView.startDownload({"cityID":131},function(data){
		if (data == true) {
			sm("do_Notification").toast("开始下载");
		} else {
			sm("do_Notification").toast("开始下载失败");
		}
	});
});

// 点击"暂停下载离线地图"按钮暂停下载离线地图
ui("do_Button_pauseDownload").on("touch",function(){
	var pauseDownload = do_BaiduMapView.pauseDownload({"cityID":131});
	if (pauseDownload == true) {
		sm("do_Notification").toast("暂停成功");
	} else {
		sm("do_Notification").toast("暂停失败");
	}
})

// 点击"移除下载离线地图"按钮暂停下载离线地图
ui("do_Button_removeDownload").on("touch",function(){
	var removeDownload = do_BaiduMapView.removeDownload({"cityID":131});
	if (removeDownload == true) {
		sm("do_Notification").toast("移除成功");
	} else {
		sm("do_Notification").toast("移除失败");
	}
});

// 事件

// 下载离线地图触发的事件 
do_BaiduMapView.on("download",function(data){
	deviceone.print("download事件："+JSON.stringify(data));  
});

// 地图区域改变完成后会触发，返回地图区域的中心点坐标 。（改变地图中心点就可触发该事件。）
do_BaiduMapView.on("regionChange",function(data){
	if (data) {
		deviceone.print("regionChange事件："+JSON.stringify(data));  
	} 
});

// 点击地图时触发
do_BaiduMapView.on("touchMap",function(data){
	if (data) {
		deviceone.print("touchMap事件："+JSON.stringify(data));  
	} 
});

// 点击标记时触发，iOS平台只有第一次点击mark会触发该事件，之后需要点击弹出的缩略图触发
do_BaiduMapView.on("touchMarker",function(data){
	if (data) {
		deviceone.print("touchMarker事件："+JSON.stringify(data));  
	} 
});
