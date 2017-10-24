ui("do_ALayout_back").on("touch", function() {
	sm("do_App").closePage();
})
sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});



var do_RichLabel1_1 = ui("do_RichLabel1_1");
do_RichLabel1_1.text = "do_RichLabel1富文本签框，设置字体高亮颜色、字体样式。";
do_RichLabel1_1.span = [{
	  "strMatch":"do_RichLabel1",
	  "substring":"0,13",
	  "spanStyle": "{\"fontColor\":\"4782F6FF\",\"fontStyle\":\"normal\"}",
	  "allowTouch": true,
	  "tag":"点我~~"
	}] 

do_RichLabel1_1.on("touch",function(data){
	deviceone.print(JSON.stringify(data),"touch事件")
})

