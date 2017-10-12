ui("do_ALayout_back").on("touch", function() {
	sm("do_App").closePage();
})
sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});



var do_ProgressBar_1 = ui("do_ProgressBar_1");

//属性----------------------------------------
//1.progress:进度值取值范围是0-100的Number(style=horizontal有效)

do_ProgressBar_1.progress = 60;











