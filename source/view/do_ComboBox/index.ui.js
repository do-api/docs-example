//1.属性

//对组件进行操作，需要先对组件实例化
var do_ComboBox = ui("do_ComboBox_1"); // 对do_ComboBox组件实例化，其中do_ComboBox_1为ui页面上do_ComboBox组件的id
var do_ComboBox_1 = ui("do_ComboBox_2");
// --------------------------------
// --items属性给组件赋值
do_ComboBox.items = "index0,index1,index2,index3";

//--bindItems方法给组件赋值
var listdata = mm("do_ListData");
do_ComboBox_1.bindItems(listdata);
listdata.addData([ {
	text : "索引0"
}, {
	text : "索引1"
}, {
	text : "索引2"
}, {
	text : "索引3"
} ])
do_ComboBox_1.refreshItems();

// --------------------------------
// --index索引属性
do_ComboBox.index = 0; // 索引0
do_ComboBox_1.index = 1; // 索引1
//
// --------------------------------
//--fontColor字体颜色属性（8位16进制字符，前6位是RGB颜色值，后两位是透明度（Alpha），例如：000000FF）
do_ComboBox.fontColor = "FF00FFFF";
do_ComboBox_1.fontColor = "FF00FF50"; // 修改后两位的透明度
//
// //--------------------------------
// --fontSize字体大小属性
do_ComboBox.fontSize = 40;
do_ComboBox_1.fontSize = 30;
//
// --------------------------------
// --textFlag字体标识属性 ，该属性只允许在设计器内修改（包含3种类型：常规-normal; 下划线-underline;
// 删除线-strikethrough）

// --------------------------------
// --fontStyle字体风格属性（包含4种类型：常规-normal; 粗体-bold; 斜体-italic;
// 粗斜体-bold_italic(iOS平台不支持) ）
ui("do_Button_fontStyle").on("touch", function() {
	if (do_ComboBox.fontStyle == "bold_italic") {
		// fontStyle属性设置成常规
		do_ComboBox.fontStyle = "normal";
		do_ComboBox.text = "常规"
	} else if (do_ComboBox.fontStyle == "normal") {
		// fontStyle属性设置成粗体
		do_ComboBox.fontStyle = "bold";
		do_ComboBox.text = "粗体"

	} else if (do_ComboBox.fontStyle == "bold") {
		// fontStyle属性设置成斜体
		do_ComboBox.fontStyle = "italic";
		do_ComboBox.text = "斜体"
	} else {
		// fontStyle属性设置成粗斜体
		do_ComboBox.fontStyle = "bold_italic";// (iOS平台不支持)
		do_ComboBox.text = "粗斜体"
	}
});

// --------------------------------
// 2.同步方法（无）

// 3.异步方法（无）

// 4.事件

// selectChanged返回选中数据的索引
do_ComboBox.on("selectChanged", function(data) {
	deviceone.print(data);
})
