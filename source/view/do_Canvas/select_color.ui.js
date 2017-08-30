var page = sm("do_Page")
var do_ALayout_root = ui("do_ALayout_root");

//默认选择颜色页面不可见
do_ALayout_root.visible = false;
do_ALayout_root.on("touch",function(){
	do_ALayout_root.visible = false;
})

var do_GridView_color = ui("do_GridView_color");
var listdata = mm("do_ListData");
do_GridView_color.bindItems(listdata);

var data_bgColor = [
                    {"bgColor":"000000FF"},{"bgColor":"0000FFFF"},{"bgColor":"FF0000FF"},{"bgColor":"00FF00FF"},{"bgColor":"FFFFFFFF"},{"bgColor":"808080FF"},{"bgColor":"800000FF"},{"bgColor":"FF8040FF"},{"bgColor":"FF8000FF"},{"bgColor":"FF8080FF"},{"bgColor":"D29F06FF"},{"bgColor":"FFFF00FF"},
                    {"bgColor":"D8FA72FF"},{"bgColor":"91F788FF"},{"bgColor":"008000FF"},{"bgColor":"91AFEEFF"},{"bgColor":"004080FF"},{"bgColor":"AC84BDFF"},{"bgColor":"D869D5FF"},{"bgColor":"780751FF"},{"bgColor":"D52B6AFF"},{"bgColor":"FF0080FF"},{"bgColor":"FF80C0FF"},{"bgColor":"FF80FFFF"}
                 ]
listdata.addData(data_bgColor);
do_GridView_color.refreshItems();

