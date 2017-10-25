ui("do_ALayout_back").on("touch", function() {
	sm("do_App").closePage();
})
sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});

var do_AccelerometerSensor = sm("do_AccelerometerSensor");

ui("do_Button_1").on("touch",function(){
	do_AccelerometerSensor.start();
})

ui("do_Button_2").on("touch",function(){
	do_AccelerometerSensor.stop();
})

ui("do_Button_3").on("touch",function(){
	var getAccelerometerData = do_AccelerometerSensor.getAccelerometerData();
	deviceone.print(JSON.stringify(getAccelerometerData),"加速度");

})

do_AccelerometerSensor.on("change",function(data){
	deviceone.print(JSON.stringify(data),"加速度变化触发");
})

do_AccelerometerSensor.on("shake",function(data){
	deviceone.print(JSON.stringify(data),"摇一摇");
})