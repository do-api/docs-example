ui("$").setMapping({
	"do_ImageView_1.source":"$rightImage"
})

var camera = sm("do_Camera");

ui("do_Button_1").on("touch",function(){
	camera.capture({ width: 750, height:1334, quality: 100 }, function(data){ 
		ui("$").bgImage = data; 
	});
})