ui("do_ALayout_back").on("touch", function() {
	sm("do_App").closePage();
})
sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});



var do_ProgressBar2_1 = ui("do_ProgressBar2_1");
var do_ProgressBar2_2 = ui("do_ProgressBar2_2");
var do_ProgressBar2_3 = ui("do_ProgressBar2_3");


ui("do_Button_fontcolor").on("touch",function(){
	do_ProgressBar2_1.fontColor = "0000FFFF";
	do_ProgressBar2_2.fontColor = "800080FF";
	do_ProgressBar2_3.fontColor = "00FFFFFF";
})
ui("do_Button_fontsize").on("touch",function(){
	do_ProgressBar2_1.fontSize = 20;
	do_ProgressBar2_2.fontSize = 30;
	do_ProgressBar2_3.fontSize = 40;
})
ui("do_Button_progress").on("touch",function(){
	do_ProgressBar2_1.progress = 52;
	do_ProgressBar2_2.progress = 62;
	do_ProgressBar2_3.progress = 28;
})
ui("do_Button_progressbgcolor").on("touch",function(){
	do_ProgressBar2_1.progressBgColor = "FFFFFFFF";
	do_ProgressBar2_2.progressBgColor = "F0F0F0FF";
	do_ProgressBar2_3.progressBgColor = "FFFFDBFF";
})
ui("do_Button_progresscolor").on("touch",function(){
	do_ProgressBar2_1.progressColor = "0000FFFF";
	do_ProgressBar2_2.progressColor = "800080FF";
	do_ProgressBar2_3.progressColor = "00FFFFFF";
})
ui("do_Button_progresswidth").on("touch",function(){
	do_ProgressBar2_1.progressWidth = 1;
	do_ProgressBar2_2.progressWidth = 10;
	do_ProgressBar2_3.progressWidth = 20;
})








