ui("do_ALayout_back").on("touch", function() {
	sm("do_App").closePage();
})
sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});

var group_imgsource = ["source://view/do_ExpandableListView/zk.jpg","source://view/do_ExpandableListView/ss.jpg"];
var child_imgsource = ["source://view/do_ExpandableListView/1.png","source://view/do_ExpandableListView/2.png"];

var do_ExpandableListView = ui("do_ExpandableListView_1");
var group_listdata = mm("do_ListData");
var child_listdata = mm("do_ListData");

/**   注意：
 *    allExpanded属性只允许设计区内修改，不能在代码里设置
 *    如果allExpanded 属性是true是默认全部展开，需要把groupcell上绑定的图片改成source://view/do_ExpandableListView/ss.jpg
 *    如果allExpanded 属性是false是默认全部收缩，需要把groupcell上绑定的图片改成source://view/do_ExpandableListView/zk.jpg
 */


group_listdata.addData([ {
	"groupid" : "001001",
	"img_type" : "source://view/do_ExpandableListView/zk.jpg",
	"gname" : "MacBook Air"
}, {
	"groupid" : "001002",
	"img_type" : "source://view/do_ExpandableListView/zk.jpg",
	"gname" : "MacBook Pro"
}, {
	"groupid" : "001003",
	"img_type" : "source://view/do_ExpandableListView/zk.jpg",
	"gname" : "iMac"
}, {
	"groupid" : "001004",
	"img_type" : "source://view/do_ExpandableListView/zk.jpg",
	"gname" : "Mac mini"
} ]);
child_listdata.addData([ [ {
	"groupid" : "001001",
	"childid" : 496,
	"cname" : "MacBook Air 11英寸 MJVP2CH/A",
	"productTypeName" : "MacBook Air",
	"img":"source://view/do_ExpandableListView/1.png"
},{
	"groupid" : "001001",
	"childid" : 3,
	"cname" : "MacBook Air 13英寸 MD760CH/A",
	"productTypeName" : "MacBook Air",
	"img" : "source://view/do_ExpandableListView/1.png"
}, {
	"groupid" : "001001",
	"childid" : 2,
	"cname" : "MacBook Air 11英寸 MD712CH/A",
	"productTypeName" : "MacBook Air",
	"img":"source://view/do_ExpandableListView/1.png"
}, {
	"groupid" : "001001",
	"childid" : 1,
	"cname" : "MacBook Air 11英寸 MD711CH/A",
	"productTypeName" : "MacBook Air",
	"img":"source://view/do_ExpandableListView/1.png"
} ], [ {
	"groupid" : "001002",
	"childid" : 492,
	"cname" : "MacBook Pro 13英寸 MF841CH/A",
	"productTypeName" : "MacBook Pro",
	"img":"source://view/do_ExpandableListView/1.png"
}, {
	"groupid" : "001002",
	"childid" : 491,
	"cname" : "MacBook Pro 13英寸 MF840CH/A",
	"productTypeName" : "MacBook Pro",
	"img":"source://view/do_ExpandableListView/1.png"
}, {
	"groupid" : "001002",
	"childid" : 401,
	"cname" : "MacBook Pro 15英寸 MD322CH/A",
	"productTypeName" : "MacBook Pro",
	"img":"source://view/do_ExpandableListView/1.png"
}, {
	"groupid" : "001002",
	"childid" : 9,
	"cname" : "MacBook Pro 13英寸 MD101CH/A",
	"productTypeName" : "MacBook Pro",
	"img":"source://view/do_ExpandableListView/1.png"
} ], [ {
	"groupid" : "001003",
	"childid" : 434,
	"cname" : "iMac 27英寸 MF886CH/A",
	"productTypeName" : "iMac",
	"img":"source://view/do_ExpandableListView/1.png"
}, {
	"groupid" : "001003",
	"childid" : 30,
	"cname" : "iMac 27英寸 MD096CH/A",
	"productTypeName" : "iMac",
	"img":"source://view/do_ExpandableListView/1.png"
}, {
	"groupid" : "001003",
	"childid" : 29,
	"cname" : "iMac 27英寸 MD095CH/A",
	"productTypeName" : "iMac",
	"img":"source://view/do_ExpandableListView/1.png"
},{
	"groupid" : "001003",
	"childid" : 23,
	"cname" : "iMac 21.5英寸 ME086CH/A",
	"productTypeName" : "iMac",
	"img":"source://view/do_ExpandableListView/1.png"
} ], [ {
	"groupid" : "001004",
	"childid" : 523,
	"cname" : "apple watch 38mm MLLD2CH/A不锈钢红运动表带",
	"productTypeName" : "Mac mini",
	"img":"source://view/do_ExpandableListView/1.png"
}, {
	"groupid" : "001004",
	"childid" : 522,
	"cname" : "apple watch 42mm MJ3T2CH/A灰铝黑运动表带",
	"productTypeName" : "Mac mini",
	"img":"source://view/do_ExpandableListView/1.png"
}, {
	"groupid" : "001004",
	"childid" : 32,
	"cname" : "Mac mini MD388CH/A",
	"productTypeName" : "Mac mini",
	"img":"source://view/do_ExpandableListView/1.png"
}, {
	"groupid" : "001004",
	"childid" : 31,
	"cname" : "Mac mini MD387CH/A",
	"productTypeName" : "Mac mini",
	"img":"source://view/do_ExpandableListView/1.png"
} ] ]);
do_ExpandableListView.bindItems(group_listdata,child_listdata);
do_ExpandableListView.refreshItems();


ui("do_Button_expand").on("touch",function(){
	//展开组
	do_ExpandableListView.expandGroup([0,1]);
})

ui("do_Button_collaps").on("touch",function(){
	//收缩组
	do_ExpandableListView.collapseGroup([0,1]);
})

ui("do_Button_scroll").on("touch",function(){
	//平滑的滚动到特定位置，groupIndex表示第几组，从0开始计数，缺省值是0
	//childIndex表示某一组的第几行，从0开始计数，缺省值是0
	//isSmooth,缺省是false表示直接跳转到某一行，没有任何平滑过渡的效果。为true表示平滑到那一行；其中为false的时候是不会触发scroll事件的，为true会触发；windows平台不支持该效果
	do_ExpandableListView.scrollToPosition({groupIndex:1,childIndex:2,isSmooth:true});
})


//---------------------事件-----------------------

//点击group时触发
do_ExpandableListView.on("groupTouch",function(d){
	var g_item = group_listdata.getOne(d);
	g_item.img_type == group_imgsource[0] ? g_item.img_type = group_imgsource[1] : g_item.img_type = group_imgsource[0];
	group_listdata.updateOne(d, g_item);    //更新一条数据
	do_ExpandableListView.refreshSpecifiedItems([d]);   //刷新指定组数据
});

//点击child时触发
do_ExpandableListView.on("childTouch",function(data){
	var c_item = child_listdata.getOne(data.groupIndex);
	c_item.map(function(v,k){
		if (k == data.childIndex){
			v.img == child_imgsource[0] ? v.img = child_imgsource[1] : v.img = child_imgsource[0];
		}
	});
	child_listdata.updateOne(data.groupIndex, c_item);
	var device = sm("do_Device").getInfo();
//	if (device.OS == "android"){                 //安卓更新child数据时需要调用refreshItems方法刷新数据
//		do_ExpandableListView.refreshItems();   
//	}
	do_ExpandableListView.expandGroup([data.groupIndex]); //展开一组数据，点击child时需要展开该child所在的group
})

//组收缩时触发
do_ExpandableListView.on("groupCollapse",function(_index){
	deviceone.print(_index,"当前收缩的组的索引");
	var g_item = group_listdata.getOne(_index);
	g_item.img_type = group_imgsource[0];
	group_listdata.updateOne(_index, g_item);    //更新一条数据
	do_ExpandableListView.refreshSpecifiedItems([_index]);   //刷新指定组数据
})

//组展开时触发
do_ExpandableListView.on("groupExpand",function(_index){
	deviceone.print(_index,"当前展开的组的索引");
	var g_item = group_listdata.getOne(_index);
	g_item.img_type = group_imgsource[1];
	group_listdata.updateOne(_index, g_item);    //更新一条数据
	do_ExpandableListView.refreshSpecifiedItems([_index]);   //刷新指定组数据
})

//滑动时触发
do_ExpandableListView.on("scroll",function(_data){
	deviceone.print(JSON.stringify(_data),"scroll事件返回值");  
	//Android平台返回{firstVisiblePosition,lastVisiblePosition}，其中firstVisiblePosition表示在组件高度范围内第一个可见cell的位置，lastVisiblePosition表示在组件高度范围内最后一个可见cell的位置；	
	//	{
	//	    "firstVisiblePosition":0,
	//	    "lastVisiblePosition":11
	//	}
	//iOS和windows平台返回offset表示滚动的位移
	//	{
	//	    "offset":146.8125
	//	}
})