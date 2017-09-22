ui("do_ALayout_back").on("touch", function() {
	sm("do_App").closePage();
})
sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});

var do_MultiSelectComboBox = ui("do_MultiSelectComboBox_1");

// 属性----------------------------------------
// 1.fontColor
do_MultiSelectComboBox.fontColor = "FF0000FF";

// 2.fontSize
do_MultiSelectComboBox.fontSize = 30;

// 3.fontStyle
do_MultiSelectComboBox.fontStyle = "bold";

// 4.text
do_MultiSelectComboBox.text = "------点击请选择------";

// 5.indexs
do_MultiSelectComboBox.indexs = 1;

// 6.items
//do_MultiSelectComboBox.items = "北京,上海,广州,三亚2222";

// 7.textAlign
// 只允许设计区内修改

// 8.textFlag
// 只允许设计区内修改

// 方法----------------------------------------
// 1.bindItems
var listdata = mm("do_ListData");
do_MultiSelectComboBox.bindItems(listdata);

var datas = [ {
	text : "那年花开月正圆-孙俪"
}, {
	text : "三生三世十里桃花-杨幂"
}, {
	text : "秦时丽人明月心-迪丽热巴"
}, {
	text : "楚乔传-赵丽颖"
} ];

listdata.addData(datas);
do_MultiSelectComboBox.refreshItems();

// 2.refreshItems




// 事件----------------------------------------
do_MultiSelectComboBox.on("selectChanged", function(data) {
	deviceone.print(JSON.stringify(data));
})
