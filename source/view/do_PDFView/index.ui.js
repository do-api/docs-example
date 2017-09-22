ui("do_ALayout_back").on("touch", function() {
	sm("do_App").closePage();
})
sm("do_Page").on("back", function() {
	sm("do_App").closePage();
});

var do_PDFView = ui("do_PDFView_1");

// 属性----------------------------------------
// 1.url
do_PDFView.url = "source://view/do_PDFView/text.pdf";

// 方法----------------------------------------
// 1.getPageCount
ui("do_Label_total").text = do_PDFView.getPageCount().total;
ui("do_TextField_count").text = do_PDFView.getPageCount().current;

// 2.jump
ui("do_TextField_count").on("textChanged",function(){
	var page_count = ui("do_TextField_count").text;
	do_PDFView.jump(parseInt(page_count));
})

// 3.prev
ui("do_ALayout_prev").on("touch",function(){
	do_PDFView.prev();
})

// 4.next
ui("do_ALayout_next").on("touch",function(){
	do_PDFView.next();
})

// 事件----------------------------------------
do_PDFView.on("pageChanged", function(data) {
	deviceone.print(JSON.stringify(data));
})
