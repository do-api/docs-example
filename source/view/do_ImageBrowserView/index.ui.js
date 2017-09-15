var app = sm("do_App");
var page = sm("do_Page");

ui("do_ALayout_back").on("touch", function() {
	app.closePage();
})
page.on("back", function() {
	app.closePage();
});


var do_ImageBrowserView = ui("do_ImageBrowserView_1");

//1.属性-------------------------------------
//index属性
do_ImageBrowserView.index = 0;

//2.方法---------------------------------------------
//bindItems方法
var datas = [ {
	source : "source://view/do_ImageBrowserView/image/1.jpg",
	init : "source://view/do_ImageBrowserView/image/1.jpg"
} ,{
	source : "source://view/do_ImageBrowserView/image/2.jpg",
	init : "source://view/do_ImageBrowserView/image/2.jpg"
},{
	source :"source://view/do_ImageBrowserView/image/3.jpg",
	init : "source://view/do_ImageBrowserView/image/3.jpg"
}]
do_ImageBrowserView.bindItems(datas);


//3.事件--------------------------------
//indexChanged事件
do_ImageBrowserView.on("indexChanged",function(index){
	deviceone.print("当前索引为:"+index);
})


//longTouch事件
do_ImageBrowserView.on("longTouch",function(data){
	deviceone.print(JSON.stringify(data));
})


//touch事件
do_ImageBrowserView.on("touch",function(data){
	deviceone.print(JSON.stringify(data));
})







