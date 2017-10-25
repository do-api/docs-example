ui("do_ALayout_back").on("touch", function() {
	sm("do_App").closePage();
})
sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});

var do_SeekBar_1 = ui("do_SeekBar_1");
do_SeekBar_1.progress = 50;

do_SeekBar_1.secondaryProgress = 90;

do_SeekBar_1.on("progressChanged",function(){
})