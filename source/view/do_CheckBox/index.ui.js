//1.属性

//对组件进行操作，需要先对组件实例化
var do_CheckBox = ui("do_CheckBox_1"); // 对do_CheckBox组件实例化，其中do_CheckBox_1为ui页面上do_CheckBox组件的id
var do_CheckBox_1 = ui("do_CheckBox_2");
// --------------------------------
//--text属性
do_CheckBox.text = "选中状态";
do_CheckBox_1.text = "未选中状态";
//
//--------------------------------
//--checked是否选中属性
do_CheckBox.checked = true;     //选中
do_CheckBox_1.checked = false;  //未选中
//
//--------------------------------
//--fontColor字体颜色属性（8位16进制字符，前6位是RGB颜色值，后两位是透明度（Alpha），例如：000000FF）
do_CheckBox.fontColor = "FF0000FF";
do_CheckBox_1.fontColor = "FF000050";  //修改后两位的透明度
//
////--------------------------------
//--fontSize字体大小属性
do_CheckBox.fontSize = 20;
do_CheckBox_1.fontSize = 30;
//
//--------------------------------
// --enabled是否可点击属性
ui("do_Button_enabled").on("touch", function() {
	if (do_CheckBox.enabled == false) {
		// enabled属性设置成true
		do_CheckBox.enabled = true;
		do_CheckBox.text = "可点击";
	} else {
		// enabled属性设置成false
		do_CheckBox.enabled = false;
		do_CheckBox.text = "不可点击";
	}
});
//
// --------------------------------
// --textFlag字体标识属性 ，该属性只允许在设计器内修改（包含3种类型：常规-normal; 下划线-underline; 删除线-strikethrough）

//--------------------------------
//--fontStyle字体风格属性（包含4种类型：常规-normal; 粗体-bold; 斜体-italic; 粗斜体-bold_italic(iOS平台不支持) ）
ui("do_Button_fontStyle").on("touch", function() {
	if (do_CheckBox.fontStyle == "bold_italic") {
		// fontStyle属性设置成常规
		do_CheckBox.fontStyle = "normal";
		do_CheckBox.text = "常规"
	} else if (do_CheckBox.fontStyle == "normal") {
		// fontStyle属性设置成粗体
		do_CheckBox.fontStyle = "bold";
		do_CheckBox.text = "粗体"

	} else if (do_CheckBox.fontStyle == "bold") {
		// fontStyle属性设置成斜体
		do_CheckBox.fontStyle = "italic";
		do_CheckBox.text = "斜体"
	} else {
		// fontStyle属性设置成粗斜体
		do_CheckBox.fontStyle = "bold_italic";//(iOS平台不支持)
		do_CheckBox.text = "粗斜体"
	}
});

// --------------------------------
// 2.同步方法（无）

// 3.异步方法（无）

// 4.事件

// checkChanged选择切换时触发
do_CheckBox.on("checkChanged", function(data) {
	if (data == true) {
		deviceone.print("选中状态");
		do_CheckBox.text = "选中状态";
	} else {
		deviceone.print("未选中状态");
		do_CheckBox.text = "未选中状态";
	}
})
