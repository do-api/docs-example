ui("do_ALayout_back").on("touch", function() {
	sm("do_App").closePage();
})
sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});

var do_CoverFlowView = ui("do_CoverFlowView_1");   //实例化画廊组件
var listdata = mm("do_ListData");           //实例化do_ListData对象
do_CoverFlowView.bindItems(listdata);       //do_CoverFlowView绑定do_ListData实例



//给listdata添加数据
listdata.addData([ {
	template : 0,
	text : "第一步 打开冰箱门",
	bg_image : "source://view/do_CoverFlowView/image/bgimg.png",
	text_fontcolor : "FFFFFFFF"
}, {
	template : 0,
	text : "第二步 把大象塞冰箱里",
	bg_image : "source://view/do_CoverFlowView/image/bgimg1.png",
	text_fontcolor : "FF00FFFF"
}, {
	template : 1,
	text : "第三步 把冰箱门关上",
	bg_image : "source://view/do_CoverFlowView/image/bgimg.png",
	_image:"source://view/do_CoverFlowView/image/img3.jpg"
} ]);
do_CoverFlowView.refreshItems();   //刷新数据


//设置滑动索引为1
do_CoverFlowView.index = 1;

//滑动显示当前视图后触发该事件
do_CoverFlowView.on("indexChanged",function(_index){
	deviceone.print(_index,"当前index");
})


//点击cell触发
do_CoverFlowView.on("touch",function(data){
	deviceone.print(JSON.stringify(data),"当前index");
})