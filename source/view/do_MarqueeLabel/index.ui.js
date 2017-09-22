ui("do_ALayout_back").on("touch", function() {
	sm("do_App").closePage();
})
sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});

var do_MarqueeLabel = ui("do_MarqueeLabel_1");

//属性----------------------------------------
//1.direction
//只允许设计区内修改

//2.fontColor
do_MarqueeLabel.fontColor = "FF0000FF";

//3.fontSize
do_MarqueeLabel.fontSize = 30;

//4.fontStyle
do_MarqueeLabel.fontStyle = "bold";

//5.text
do_MarqueeLabel.text = "文字能滚动播出的文本标签框";


