sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});

var do_FragmentView = ui("do_FragmentView_1"); // 实例化do_FragmentView组件
var listdata = mm("do_ListData"); // 实例化do_ListData对象

// 给listdata添加数据
listdata.addData([ {
	leftTemplate : 0,
	template : 1,
	rightTemplate : 2,
	$leftImage : "source://view/do_FragmentView/image/default.png",
	middle_title : "多页面滑动视图",
	$rightImage : "source://view/do_FragmentView/image/right.png"
} ]);

do_FragmentView.bindItems(listdata); // do_FragmentView绑定do_ListData实例

sm("do_Page").on("openleft", function() {
	do_FragmentView.showLeft(); // 显示左侧视图
});

sm("do_Page").on("openright", function() {
	do_FragmentView.showRight(); // 显示右侧视图
});

// 设置支持手势滑动的方向
ui("do_Button_both").on("touch", function() {
	do_FragmentView.supportGesture = "both"; // 设置左右方向都支持手势滑动
})
ui("do_Button_left").on("touch", function() {
	do_FragmentView.supportGesture = "left"; // 设置左边支持手势滑动
})
ui("do_Button_right").on("touch", function() {
	do_FragmentView.supportGesture = "right"; // 设置右边支持手势滑动
})

ui("do_Button_reset").on("touch", function() {
	do_FragmentView.reset(); // 如果组件当前显示的是左侧视图或右侧视图，调用该方法回到主视图页面
})

ui("do_Button_refresh").on("touch", function() {
	listdata.removeAll();
	listdata.addData([ {
		leftTemplate : 0,
		template : 1,
		rightTemplate : 2,
		$leftImage : "source://view/do_FragmentView/image/right.png",
		middle_title : "主视图刷新数据",
		$rightImage : "source://view/do_FragmentView/image/default.png"
	} ]);
	do_FragmentView.refreshItems(); // 刷新数据
})
