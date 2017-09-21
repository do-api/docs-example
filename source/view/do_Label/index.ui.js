ui("do_ALayout_back").on("touch", function() {
	sm("do_App").closePage();
})
sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});



var do_Label = ui("do_Label_3");

//属性----------------------------------------
//1.fontColor
do_Label.fontColor = "FF0000FF";

//2.fontSize
do_Label.fontSize = 30;

//3.fontStyle
do_Label.fontStyle = "italic";

//4.linesSpace
do_Label.linesSpace = 40;

//do_Label.linesSpace = 10;

//5.maxHeight
//只允许设计区内修改

//6.maxLines
//只允许设计区内修改

//7.maxLines
//只允许设计区内修改

//8.shadow
do_Label.shadow = "FF0000FF,0,0,1";
//do_Label.shadow = "FF0000FF,0,0,5";
//do_Label.shadow = "FF0000FF,8,8,5";

//9.border	
do_Label.text = "文本标签框，用于显示文本文字，设置字体样式、大小、内容对齐"
	
//10.textAlign
//只允许设计区内修改

//11.textFlag
do_Label.textFlag = "underline"









