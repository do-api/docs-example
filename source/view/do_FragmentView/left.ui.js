ui("$").setMapping({
	"do_ImageView_1.source":"$leftImage"
})

var do_ListView = ui("do_ListView_2");
var listdata = mm("do_ListData");
do_ListView.bindItems(listdata);

var data0 = [
    {"image":"source://view/do_FragmentView/image/info.png","text":"个人资料"},
    {"image":"source://view/do_FragmentView/image/changepwd.png","text":"修改密码"},
    {"image":"source://view/do_FragmentView/image/yijian.png","text":"意见反馈"}
]

listdata.addData(data0);
do_ListView.refreshItems();


