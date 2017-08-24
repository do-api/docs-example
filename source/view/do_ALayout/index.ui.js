/*******************************************************************************
 * 
 ******************************************************************************/
var nf = sm("do_Notification");
var page = sm("do_Page");
var layout = ui("ALayout_1");

// 把header.ui的根节点（是一个id为root的ALayout）加到当前index.ui的0，0位置
// 并且重新给它命名一个新的唯一标示id "header_id", 这个id不要和index.ui里已有的ui组件的id重复
var addedheader = layout.add("header_id", "source://view/do_ALayout/header.ui", 0, 0);

// 获取header.ui的根节点对象（是一个id为root的ALayout），但是我们不能通过
// var header = ui("root");来获取这个对象，因为root这个id的作用域是在header.ui,而不是在index.ui.js
// 正确的写法是有2种，第一是：
var header1 = ui("header_id");
// 第二是：
var header2 = ui(addedheader);
// 判断这二个对象是否相同，可以通过getAddress方法
nf.toast(header1.getAddress() == header2.getAddress());

// 进一步我们还可以获取到header.ui根节点之下的子节点，比如statusbar是header.ui最上面的一部分组件的id
var statusbar = ui(addedheader + ".statusbar");
statusbar.bgColor = "FF0000FF";
// 我们并不推荐在index.ui里直接获取header.ui 的子对象，这不符合降低耦合度的原则

// index.ui不能直接调用header.ui里的函数，因为它们处于不同的js运行环境
// 要实现这二者之间的数据交换，可以通过二种方式
// 第一:通过数据bind，在header.ui.js里setmapping,然后通过binddata给header赋值
var hashdata = mm("do_HashData");
header1.bindData(hashdata);

hashdata.addData({
	"title_value" : "我是首页",
	"menu_bg_value" : "FF0000FF"
})
header1.refreshData();

// 第二：通过消息机制，订阅和触发消息都在page对象，因为header.ui和index.ui在同一page下
page.on("click_menu", function(data) {
	nf.alert(data);
})

//获取所有子view的id
var children = layout.getChildren();
deviceone.print(children,typeof(children));
deviceone.print(ui(children[0]).text,typeof(children[0]));

layout.on("touch",function(){
	deviceone.print("touch 触发")
})
layout.on("touchDown",function(){
	deviceone.print("touchDown 触发")
})
layout.on("touchUp",function(){
	deviceone.print("touchUp 触发")
})
layout.on("longTouch",function(){
	deviceone.print("longTouch 触发")
})