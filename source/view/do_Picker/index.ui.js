ui("do_ALayout_back").on("touch", function() {
	sm("do_App").closePage();
})
sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});

var do_Picker = ui("do_Picker_1");
// 属性----------------------------------------
// 1.fontColor
do_Picker.fontColor = "000000FF";

// 2.fontSize
do_Picker.fontSize = 30;

// 3.fontStyle
do_Picker.fontStyle = "bold";

// 4.index
do_Picker.index = 1;

// 5.selectedFontColor
do_Picker.selectedFontColor = "FF0000FF";

// 6.selectedFontStyle
do_Picker.selectedFontStyle = "italic";

// 方法----------------------------------------
// 1.bindItems
var listdata = mm("do_ListData");
do_Picker.bindItems(listdata);

var datas = [ "那年花开月正圆-孙俪", "三生三世十里桃花-杨幂", "秦时丽人明月心-迪丽热巴", "楚乔传-赵丽颖" ];

listdata.addData(datas);
do_Picker.refreshItems();

// 2.refreshItems

// 事件----------------------------------------
do_Picker.on("selectChanged", function(data) {
	deviceone.print(JSON.stringify(data));
})
