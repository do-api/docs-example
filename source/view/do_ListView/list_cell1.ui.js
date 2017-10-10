var rootview = ui("$");
var page = sm("do_Page");

rootview.setMapping({
    "do_Label_type.text": "type",
    "do_GridView_1.items": "type_arrs"
});


ui("do_GridView_1").on("touch",function(_index){
	page.fire("choose_type", {item:ui("do_Label_type").tag,index:_index});
})