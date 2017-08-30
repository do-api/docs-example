var rootview = ui("$");
var nf = sm("do_Notification");
var page = sm("do_Page");
var storage = sm("do_Storage");
var global = sm("do_Global");
var app = sm("do_App");
var album = sm("do_Album");

var select_color = ui(rootview.add("select_color","source://view/do_Canvas/select_color.ui", 0, 0));
var input_strokeWidth = ui(rootview.add("input_strokeWidth","source://view/do_Canvas/input_strokeWidth.ui", 0, 0));

var bitmap = mm("do_Bitmap");
var do_Canvas = ui("do_Canvas_1");
var do_ALayout_clear = ui("do_ALayout_clear");
var do_GridView_items = ui("do_GridView_items");
var listdata = mm("do_ListData");
do_GridView_items.bindItems(listdata);

ui("do_ALayout_back").on("touch", function() {
	app.closePage();
})
page.on("back", function() {
	app.closePage();
});

var isdefine = false;
var strokeWidth = 1; // 定义全局变量画笔宽度，默认值为1

listdata.addData([ {
	index : 0,
	select_type : "isFull:填充",
	type_fontcolor : "00CE88FF"
}, {
	index : 1,
	select_type : "isFull:不填充",
	type_fontcolor : "000000FF"
}, {
	index : 2,
	select_type : "strokeCap:笔触样式(正方形)",
	type_fontcolor : "00CE88FF"
}, {
	index : 3,
	select_type : "strokeCap:笔触样式(圆)",
	type_fontcolor : "000000FF"
}, {
	index : 4,
	select_type : "strokeColor:画笔颜色",
	type_fontcolor : "000000FF"
}, {
	index : 5,
	select_type : "strokeWidth:画笔宽度1",
	type_fontcolor : "000000FF"
}, {
	index : 6,
	select_type : "defineArc:弧",
	type_fontcolor : "000000FF",
	parm : {
		start : {
			x : 2,
			y : 2
		},
		end : {
			x : 500,
			y : 460
		},
		startAngle : 0, // 为0默认与x轴重合
		sweepAngle : 120, // 默认为90，以起始角度开始，顺时针扫描的度数
		useCenter : true
	// 这个弧的区域是否包含中心点
	}
}, {
	index : 7,
	select_type : "defineCircle:圆",
	type_fontcolor : "000000FF",
	parm : {
		point : {
			x : 350,
			y : 250
		},
		radius : 100
	}
}, {
	index : 8,
	select_type : "defineImage:图片",
	type_fontcolor : "000000FF",
	parm : {
		source : "http://photocdn.sohu.com/20161128/Img474303098.jpg",
		coord : {
			x : 200,
			y : 200
		}
	}
}, {
	index : 9,
	select_type : "defineLine:线",
	type_fontcolor : "000000FF",
	parm : {
		start : {
			x : 180,
			y : 180
		},
		end : {
			x : 400,
			y : 450
		}
	}
}, {
	index : 10,
	select_type : "defineOval:椭圆",
	type_fontcolor : "000000FF",
	parm : {
		start : {
			x : 220,
			y : 200
		},
		end : {
			x : 400,
			y : 300
		}
	}
}, {
	index : 11,
	select_type : "definePoint:点",
	type_fontcolor : "000000FF",
	parm : {
		points : [ {
			x : 400,
			y : 250
		}, {
			x : 610,
			y : 260
		}, {
			x : 500,
			y : 300
		}, {
			x : 350,
			y : 280
		}, {
			x : 520,
			y : 400
		}, {
			x : 220,
			y : 430
		} ]
	}
}, {
	index : 12,
	select_type : "defineRect:矩形",
	type_fontcolor : "000000FF",
	parm : {
		start : {
			x : 200,
			y : 330
		},
		end : {
			x : 550,
			y : 500
		}
	}
}, {
	index : 13,
	select_type : "defineText:文字",
	type_fontcolor : "000000FF",
	parm : {
		text : "定义文字啦啦",
		coord : {
			x : 200,
			y : 300
		},
		fontStyle : "italic",
		textFlag : "strikethrough",
		fontSize : 35,
		textAlign : "left",
		angle : 0
	}
} ])
do_GridView_items.refreshItems();


do_GridView_items.on("touch", function(index) {
	if (index == 0) {
		listdata.updateOne(0, {
			index : 0,
			select_type : "isFull:填充",
			type_fontcolor : "00CE88FF"
		})
		listdata.updateOne(1, {
			index : 1,
			select_type : "isFull:不填充",
			type_fontcolor : "000000FF"
		})
		do_Canvas.isFull = true; // 设置do_Canvas的isFull是否填充属性为填充
	}
	if (index == 1) {
		listdata.updateOne(0, {
			index : 0,
			select_type : "isFull:填充",
			type_fontcolor : "000000FF"
		})
		listdata.updateOne(1, {
			index : 1,
			select_type : "isFull:不填充",
			type_fontcolor : "00CE88FF"
		})
		do_Canvas.isFull = false; // 设置do_Canvas的isFull是否填充属性为不填充
	}
	if (index == 2) {
		listdata.updateOne(2, {
			index : 2,
			select_type : "strokeCap:笔触样式(正方形)",
			type_fontcolor : "00CE88FF"
		})
		listdata.updateOne(3, {
			index : 3,
			select_type : "strokeCap:笔触样式(圆)",
			type_fontcolor : "000000FF"
		})
		do_Canvas.strokeCap = 0; // 设置do_Canvas的strokeCap笔触样式属性为正方形}
	}
	if (index == 3) {
		listdata.updateOne(2, {
			index : 2,
			select_type : "strokeCap:笔触样式(正方形)",
			type_fontcolor : "000000FF"
		})
		listdata.updateOne(3, {
			index : 3,
			select_type : "strokeCap:笔触样式(圆)",
			type_fontcolor : "00CE88FF"
		})
		do_Canvas.strokeCap = 1; // 设置do_Canvas的strokeCap笔触样式属性为圆形
	}
	if (index == 4)
		select_color.visible = true; // 显示选择颜色页面修改do_Canvas的strokeColor画笔颜色属性
	if (index == 5) {
		page.fire("trans_strokeWidth", strokeWidth);
		input_strokeWidth.visible = true; // 显示输入画笔宽度页面修改do_Canvas的strokeWidth画笔宽度属性
	}
	if (index > 5 && index < 14) {
		change_select(index);
		isdefine = true;
	}
	do_GridView_items.refreshItems();
})


function change_select(_index) {
	var allitems = listdata.getRange(0);
	allitems.map(function(v, k) {
		if (k > 5 && k < 14) {
			if (k == _index) {
				v.type_fontcolor = "00CE88FF";
				if (k == 6)
					do_Canvas.defineArc(v.parm); // 调用do_Canvas的defineArc方法，定义画的图形为弧形
				if (k == 7)
					do_Canvas.defineCircle(v.parm); // 调用do_Canvas的defineCircle方法，定义画的图形为圆形
				if (k == 8) {
					bitmap.loadFile({
						source : v.parm.source
					}, function(data, e) {
						do_Canvas.defineImage({
							source : bitmap,
							coord : v.parm.coord
						}); // 调用do_Canvas的defineImage方法，定义画的是图片
					})
				}
				if (k == 9)
					do_Canvas.defineLine(v.parm); // 调用do_Canvas的defineLine方法，定义画的是线
				if (k == 10)
					do_Canvas.defineOval(v.parm); // 调用do_Canvas的defineOval方法，定义画的图形是椭圆
				if (k == 11)
					do_Canvas.definePoint(v.parm); // 调用do_Canvas的definePoint方法，定义画的图形是点或者点的集合
				if (k == 12)
					do_Canvas.defineRect(v.parm); // 调用do_Canvas的defineRect方法，定义画的图形是矩形
				if (k == 13)
					do_Canvas.defineText(v.parm); // 调用do_Canvas的defineText方法，定义画出来的的是具体的文字
			} else
				v.type_fontcolor = "000000FF";
		}
	});
	listdata.removeAll();
	listdata.addData(allitems);
	do_GridView_items.refreshItems();
}

// 将当前do_Canvas定义的图形都画出来
ui("do_Button_paint").on("touch", function() {
	deviceone.print(do_Canvas.strokeWidth)
	if (isdefine == true)
		do_Canvas.paint();
	else
		sm("do_Notification").alert("请先选择您想画的图形种类");
})

// 选择颜色
page.on("select_color", function(data) {
	select_color.visible = false;
	listdata.updateOne(4, {
		index : 4,
		select_type : "strokeColor:画笔颜色",
		type_fontcolor : data.bgColor
	})
	do_GridView_items.refreshItems();
	do_Canvas.strokeColor = data.bgColor; // 设置do_Canvas的strokeColor画笔颜色
})

// 修改画笔宽度
page.on("new_strokeWidth", function(data) {
	strokeWidth = parseInt(data);
	input_strokeWidth.visible = false;
	listdata.updateOne(5, {
		index : 5,
		select_type : "strokeWidth:画笔宽度" + strokeWidth,
		type_fontcolor : "000000FF"
	})
	do_GridView_items.refreshItems();
	do_Canvas.strokeWidth = strokeWidth; // 设置do_Canvas的strokeWidth画笔宽度
})

// 清空画板 清空画板时，之前定义的图形也会清空
do_ALayout_clear.on("touch", function() {
	do_Canvas.clear();
	var allitems = listdata.getRange(0);
	allitems.map(function(v, k) {
		if (k > 5 && k < 14) {
			v.type_fontcolor = "000000FF";
		}
	});
	listdata.removeAll();
	listdata.addData(allitems);
	do_GridView_items.refreshItems();
	isdefine = false;
})

// 定义一个2秒的动画过程：缩放比例1-》1.2，图片位置：(0,0)-》(-75, -133)
var img_anima = mm("do_Animation");
img_anima.fillAfter = true;
img_anima.transfer({
	delay : 0,
	duration : 900,
	curve : "Linear",
	autoReverse : false,
	fromX : 0,
	fromY : 0,
	toX : 690,
	toY : 1334
}, "start1");
img_anima.scale({
	delay : 0,
	duration : 900,
	curve : "Linear",
	autoReverse : false,
	scaleFromX : 1,
	scaleFromY : 1,
	scaleToX : 0.001,
	scaleToY : 0.001
}, "start2");

// 保存图片到手机
ui("do_Button_save").on("touch", function() {
	var bitmap1 = mm("do_Bitmap");
	do_Canvas.saveAsBitmap(bitmap1, function(data, e) {
		deviceone.print(JSON.stringify(data))
		
//		ui("do_ImageView_picture").source = img_source;
//		ui("do_ImageView_picture").visible = true;
//		ui("do_ImageView_picture").animate(img_anima);
	})

})
