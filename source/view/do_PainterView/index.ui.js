var nf = sm("do_Notification");
var page = sm("do_Page");
var storage = sm("do_Storage");
var global = sm("do_Global");
var app = sm("do_App");
var album = sm("do_Album");
var rootview = ui("$");
var select_color = ui(rootview.add("select_color", "source://view/do_PainterView/select_color.ui", 0, 0));

var pdata = page.getData();

ui("do_ALayout_back").on("touch",function(){
	app.closePage();
})
page.on("back", function(){
	app.closePage();
});

var do_PainterView = ui("do_PainterView_1");
var do_ALayout_clear = ui("do_ALayout_clear");

var do_ALayout_black = ui("do_ALayout_black");
var do_ALayout_blue = ui("do_ALayout_blue");
var do_ALayout_red = ui("do_ALayout_red");
var do_ALayout_more = ui("do_ALayout_more");
var do_ALayout_gry = ui("do_ALayout_gry");

var do_Button_black = ui("do_Button_black");
var do_Button_blue = ui("do_Button_blue");
var do_Button_red = ui("do_Button_red");
var do_Label_more0 = ui("do_Label_more0");
var do_Button_gry = ui("do_Button_gry");

var do_Button_black_1 = ui("do_Button_black_1");
var do_Button_blue_1 = ui("do_Button_blue_1");
var do_Button_red_1 = ui("do_Button_red_1");
var do_Label_more_1 = ui("do_Label_more_1");
var do_Label_more = ui("do_Label_more");

var do_ImageView_circle0 = ui("do_ImageView_circle0");
var do_ImageView_circle1 = ui("do_ImageView_circle1");
var do_ImageView_circle2 = ui("do_ImageView_circle2");

var do_ALayout_circle0 = ui("do_ALayout_circle0");
var do_ALayout_circle1 = ui("do_ALayout_circle1");
var do_ALayout_circle2 = ui("do_ALayout_circle2");

var do_ImageView_undo = ui("do_ImageView_undo");
var do_ImageView_save = ui("do_ImageView_save");

var do_ALayout_undo = ui("do_ALayout_undo")
var do_ALayout_save = ui("do_ALayout_save")


var brushWidth = 3;
var action_alys = [ui("do_ALayout_black"), ui("do_ALayout_blue"), ui("do_ALayout_red"), ui("do_ALayout_more")];
var action_imgs = [ui("do_Button_black"), ui("do_Button_blue"), ui("do_Button_red"), ui("do_Label_more0")];
var action_imgs_1 = [ui("do_Button_black_1"), ui("do_Button_blue_1"), ui("do_Button_red_1"), ui("do_Label_more_1")];
var action_color = ["000000FF","0000FFFF","FF0000FF","00FF00FF"]
var color_data = [ {
	action_alys : do_ALayout_black,
	action_imgs : do_Button_black,
	action_imgs_1 : do_Button_black_1,
	action_color : "000000FF"
}, {
	action_alys : do_ALayout_blue,
	action_imgs : do_Button_blue,
	action_imgs_1 : do_Button_blue_1,
	action_color : "0000FFFF"
}, {
	action_alys : do_ALayout_red,
	action_imgs : do_Button_red,
	action_imgs_1 : do_Button_red_1,
	action_color : "FF0000FF"
}, {
	action_alys : do_ALayout_more,
	action_imgs : do_Label_more0,
	action_imgs_1 : do_Label_more_1,
	action_color : "00FF00FF"
} ];
	

var action_btn = function(obj_data) {
	for (var i = 0; i < obj_data.length; i++) {
		obj_data[i].action_alys.on("touch", i, function(_data, _para) {
			var _index = _para.data;
			for (var j = 0; j < obj_data.length; j++) {
				if (_index == j && _index != 3) {
					obj_data[j].action_imgs.visible = false;
					obj_data[j].action_imgs_1.visible = true;
					do_PainterView.brushColor = obj_data[j].action_color; // 设置画笔颜色
				} else if (_index == j && _index == 3) {
					obj_data[j].action_imgs.visible = false;
					obj_data[j].action_imgs_1.visible = true;
					select_color.visible = true;
					do_PainterView.brushColor = obj_data[j].action_color;
				} else {
					obj_data[j].action_imgs.visible = true;
					obj_data[j].action_imgs_1.visible = false;
				}
			}
			do_Label_more0.bgColor = do_Label_more.bgColor;
			do_PainterView.brushWidth = brushWidth; // 设置画笔宽度
		});
	}
}
action_btn(color_data);

page.on("select_color1",function(data){
	select_color.visible = false;
	do_Label_more0.visible = false;
	do_Label_more_1.visible = true;
})

//选择颜色
page.on("select_color", function(data) {
	if (data.bgColor == "000000FF") {
		do_Button_black.visible = false;
		do_Button_black_1.visible = true;
		do_Button_blue.visible = true;
		do_Button_blue_1.visible = false;
		do_Button_red.visible = true;
		do_Button_red_1.visible = false;
		do_Label_more0.visible = true;
		do_Label_more_1.visible = false;
		do_PainterView.brushColor = "000000FF";
		select_color.visible = false;
	} else if (data.bgColor == "0000FFFF") {
		do_Button_black.visible = true;
		do_Button_black_1.visible = false;
		do_Button_blue.visible = false;
		do_Button_blue_1.visible = true;
		do_Button_red.visible = true;
		do_Button_red_1.visible = false;
		do_Label_more0.visible = true;
		do_Label_more_1.visible = false;
		do_PainterView.brushColor = "0000FFFF";
		select_color.visible = false;
	} else if (data.bgColor == "FF0000FF") {
		do_Button_black.visible = true;
		do_Button_black_1.visible = false;
		do_Button_blue.visible = true;
		do_Button_blue_1.visible = false;
		do_Button_red.visible = false;
		do_Button_red_1.visible = true;
		do_Label_more0.visible = true;
		do_Label_more_1.visible = false;
		do_PainterView.brushColor = "FF0000FF";
		do_PainterView.brushWidth = brushWidth
		select_color.visible = false;
	} else {
		do_Label_more.bgColor = data.bgColor;
		do_Label_more0.bgColor = data.bgColor;
		do_Label_more_1.bgColor = data.bgColor;
		do_PainterView.brushColor = data.bgColor;
		select_color.visible = false;
	}
	do_PainterView.brushWidth = brushWidth;
})

//字体粗细
do_ALayout_circle0.on("touch",function(){
	brushWidth = 1;
	do_PainterView.brushWidth = brushWidth;
	do_ImageView_circle0.source = "source://view/do_PainterView/image/circle_1.png";
	do_ImageView_circle1.source = "source://view/do_PainterView/image/circle.png";
	do_ImageView_circle2.source = "source://view/do_PainterView/image/circle.png";
})

do_ALayout_circle1.on("touch",function(){
	brushWidth = 3;
	do_PainterView.brushWidth = 3;
	do_ImageView_circle0.source = "source://view/do_PainterView/image/circle.png";
	do_ImageView_circle1.source = "source://view/do_PainterView/image/circle_1.png";
	do_ImageView_circle2.source = "source://view/do_PainterView/image/circle.png";
})

do_ALayout_circle2.on("touch",function(){
	brushWidth = 8;
	do_PainterView.brushWidth = 8;
	do_ImageView_circle0.source = "source://view/do_PainterView/image/circle.png";
	do_ImageView_circle1.source = "source://view/do_PainterView/image/circle.png";
	do_ImageView_circle2.source = "source://view/do_PainterView/image/circle_1.png";
})


//清空画板
do_ALayout_clear.on("touch",function(){
	do_PainterView.clear();
})

//回退操作
do_ALayout_undo.on("touch",function(){
	do_PainterView.undo();
})


do_ALayout_save.on("touch",function(){
	//保存图片到手机，保存的图片路径支持data://目录。如果为空缺省返回唯一图片路径，会存到data://temp/do_PainterView/目录下
	do_PainterView.saveAsImage({
		"format" : "PNG"
	}, function(data) {
		if (data) {
			sm("do_Notification").toast("保存成功");
			deviceone.print(JSON.stringify(data), "保存到手机的图片");
		}
	})
})

ui("do_ALayout_savebitmap").on("touch",function(){
	var bitmap = mm("do_Bitmap");
	// 保存位图
	do_PainterView.saveAsBitmap(bitmap, function(data, e) {
		// 将位图保存为jpg格式的图片到手机data://save/目录下
		var _image = "data://save/" + global.getTime() + ".png";
		bitmap.save("PNG", 100, _image, function(bitmap_image, e) {
			if (bitmap_image) {
				sm("do_Notification").toast("保存位图成功");
				deviceone.print(JSON.stringify(bitmap_image), "保存到手机的图片");
			}
		})
	})
})