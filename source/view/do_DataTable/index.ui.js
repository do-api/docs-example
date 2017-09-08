//进页面显示效果------------------------------------------

var do_DataTable = ui("do_DataTable_1"); // 实例化
var title = [ "部门", "姓名", "出生日期", "年龄", "户籍所在地", "就职时间", "婚姻状况", "联系电话" ];
var title_width = [ "250", "200", "250", "180", "250", "200", "200", "200" ];
//var title_width = [ '450', '200', '450', '180', '250', '200', '200', '200' ];

do_DataTable.isHeaderVisible = true;
do_DataTable.setHeaderStyle(title_width, "120", "0080FFFF", "FFFFFFFF","italic", "underline", 30);
do_DataTable.setHeaderData(title);
do_DataTable.setRowStyle("60", [ "E8E8E8FF" ], "000000FF", "normal", "normal",30);
do_DataTable.setRowData([]);

// 属性------------------------------------------

// 1.isHeaderVisible是否显示表头
var do_Button_isHeaderVisible = ui("do_Button_isHeaderVisible");
do_Button_isHeaderVisible.on("touch",function(){
	do_DataTable.isHeaderVisible = true; // 显示表头
})

// 方法------------------------------------------

// 1.setHeaderStyle设置表头样式
var do_Button_setHeaderStyle = ui("do_Button_setHeaderStyle");
do_Button_setHeaderStyle.on("touch",function(){
//	//设置表头每列宽度300,高度100,背景透明度为50的红色,字体为蓝色,粗斜体,删除线,字体大小26
//	do_DataTable.setHeaderStyle("300", "100", "FF000050", "0080FFFF","bold_italic", "strikethrough", 26);
//	do_DataTable.setRowData([]);
	
	//设置表头第一列是70,其余列的宽度是100,高度80,背景红色,字体为白色,斜体,常规,字体大小26
	do_DataTable.setHeaderStyle([ "70", "100", "100", "100", "100", "100", "100", "100" ], "80", "FF0000FF", "FFFFFFFF","italic", "normal", 26);
	do_DataTable.setRowData([]);
})

// 2.setHeaderData设置表头数据
var do_Button_setHeaderData = ui("do_Button_setHeaderData");
do_Button_setHeaderData.on("touch",function(){
	do_DataTable.setHeaderData([ "课程", "周一", "周二", "周三", "周四", "周五", "周六", "周天" ]);
	do_DataTable.setRowData([]);
})

// 3.setRowData: 设置表格数据
var do_Button_setRowData = ui("do_Button_setRowData");
do_Button_setRowData.on("touch",function(){
	var change_lists = [
	             		[ "1", "班级会", "数学", "数学", "化学", "音乐", "化学","物理" ],
	             		[ "2", "语文", "语文", "地理", "数学", "美术", "生物","数学" ],
	             		[ "3", "英语", "体育", "生物", "美术", "体育", "语文","英语" ],
	             		[ "4", "物理", "化学", "历史", "体育", "语文", "物理","地理" ],
	             		[ "午休", "", "", "", "", "", "","" ],
	             		[ "1", "英语", "体育", "生物", "美术", "体育", "语文","英语" ],
	             		[ "2", "物理", "化学", "历史", "体育", "语文", "物理","地理" ]
	             	];
	do_DataTable.setRowData(change_lists);
})

// 4.setRowStyle设置数据样式
var do_Button_setRowStyle = ui("do_Button_setRowStyle");
do_Button_setRowStyle.on("touch",function(){
	//设置数据高度100,数据背景颜色
	do_DataTable.setRowStyle("40", ["0080FFFF","FF0000FF"], "FFFFFFFF", "normal", "normal",30);
	var change_lists = [
	             		[ "1", "班级会", "数学", "数学", "化学", "音乐", "化学","物理" ],
	             		[ "2", "语文", "语文", "地理", "数学", "美术", "生物","数学" ],
	             		[ "3", "英语", "体育", "生物", "美术", "体育", "语文","英语" ],
	             		[ "4", "物理", "化学", "历史", "体育", "语文", "物理","地理" ],
	             		[ "午休", "", "", "", "", "", "","" ],
	             		[ "1", "英语", "体育", "生物", "美术", "体育", "语文","英语" ],
	             		[ "2", "物理", "化学", "历史", "体育", "语文", "物理","地理" ]
	             	];
	do_DataTable.setRowData(change_lists);
})

// 5.setCellDatas设置单元格属性
var do_Button_setCellDatas = ui("do_Button_setCellDatas");
do_Button_setCellDatas.on("touch",function(){
	//row,column都从0开始,代表第一行第一列,以此类推
	do_DataTable.setCellDatas([
       {
           row: 0,
           column: 0,
           text: "第一行第一列",
           style: {
               bgColor: "FF8040FF",
               fontColor: "0080FFFF",
               fontStyle: "normal",
               textFlag: "underline",
               fontSize: "20"
           }
       },
       {
           row: 1,
           column: 1,
           text: "第二行第二列",
           style: {
               bgColor: "FF8040FF",
               fontColor: "0080FFFF",
               fontStyle: "bold",
               textFlag: "normal",
               fontSize: "25"
           }
       }
   ])
})


// 事件------------------------------------------

// 1.longTouch长按单元格触发
do_DataTable.on("longTouch", function(data) {
	deviceone.print(JSON.stringify(data));
})

// 2.touch点击单元格触发
do_DataTable.on("touch", function(data) {
	deviceone.print(JSON.stringify(data));
})



