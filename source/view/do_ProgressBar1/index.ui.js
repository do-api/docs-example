ui("do_ALayout_back").on("touch", function() {
	sm("do_App").closePage();
})
sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});



var do_ProgressBar1 = ui("do_ProgressBar1_1");


ui("do_Button_change").on("touch",function(){
	do_ProgressBar1.changeImage = "source://view/do_ProgressBar1/image/smile.png"
})
ui("do_Button_default").on("touch",function(){
	do_ProgressBar1.defaultImage = "source://view/do_ProgressBar1/image/circle.png"
})
ui("do_Button_pointcolor").on("touch",function(){
	do_ProgressBar1.pointColors = "000000FF,FF0000FF,00FFFFFF,FF00FFFF";
})
ui("do_Button_pointnum").on("touch",function(){
	do_ProgressBar1.pointNum = 7;
})








