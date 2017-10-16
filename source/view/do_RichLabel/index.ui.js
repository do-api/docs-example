ui("do_ALayout_back").on("touch", function() {
	sm("do_App").closePage();
})
sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});



var do_RichLabel_1 = ui("do_RichLabel_1");
var do_RichLabel_2 = ui("do_RichLabel_2");
var do_RichLabel_3 = ui("do_RichLabel_3");


do_RichLabel_1.text = "<a href=\"http://www.deviceone.net\">Visit DeviceOne</a><h1>ljlkjljk</h1><a href = \"mailto:12345@126.com\">12345@126.com</a> jjjjjj <a href = \"tel:10086\">tel:10086</a> ddffeeff <a href = \"sms:10086\">sms:10086</a>";
do_RichLabel_2.text = "<font color=red>This is a page with lots of URLs.</font> <a href=\"http://droidyue.com\">droidyue.com</a> "
		+ "This left is a very good blog. There are so many great blogs there. You can find what you want in that blog."
		+"<a href='#aaa' id='linktouch'> 点击我</a>";
do_RichLabel_3.text = "<img src='http://www.w3school.com.cn/i/eg_tulip.jpg'  alt='上海鲜花港' /><img src='source://view/do_RichLabel/2.jpg'  alt='img1' />";



do_RichLabel_2.on("linkTouch",function(data){
	deviceone.print(JSON.stringify(data),"linkTouch事件")
})









