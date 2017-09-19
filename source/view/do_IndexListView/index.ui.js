sm("do_Page").on("back",function(){
	sm("do_App").closePage();
})

var do_HashData = mm("do_HashData");
var _chooseindex = {"index":"","groupID":""};

var index_arr = [];
sm("do_InitData").readFile("initdata://contact.json", function(data, e) {
	if (data) {
		index_arr = [];
		for (var key in data){
			index_arr.push(key);
		}
		do_HashData.removeAll();
		do_HashData.addData(data);
		//绑定数据
		ui("do_IndexListView_person").bindItems(do_HashData,index_arr);
		//刷新items数据
		ui("do_IndexListView_person").refreshItems();
	}
})

//点击事件
ui("do_IndexListView_person").on("touch","","1000",function(_data){
	deviceone.print(JSON.stringify(_data))
	var _all = do_HashData.getAll();
	if (_chooseindex.index != ""){
		if (_data.groupID == _chooseindex.groupID && _data.index == _chooseindex.index){
			if (_all[_data.groupID][_data.index]._choose == "source://view/do_IndexListView/image/choose.png"){
				_all[_data.groupID][_data.index]._choose = "source://view/do_IndexListView/image/choose_d.png";
			} else {
				_all[_data.groupID][_data.index]._choose = "source://view/do_IndexListView/image/choose.png";
			}
		} else {
			if (_all[_data.groupID][_data.index]._choose == "source://view/do_IndexListView/image/choose.png"){
				_all[_data.groupID][_data.index]._choose = "source://view/do_IndexListView/image/choose_d.png";
			} else {
				_all[_data.groupID][_data.index]._choose = "source://view/do_IndexListView/image/choose.png";
			}
			_all[_chooseindex.groupID][_chooseindex.index]._choose = "source://view/do_IndexListView/image/choose.png";
		}
	} else {
		for (var key in _all){
			if (key == _data.groupID){
				_all[key].map(function(v,k){
					if (v.template == 1 && k == _data.index){
						if (v._choose == "source://view/do_IndexListView/image/choose.png"){
							v._choose = "source://view/do_IndexListView/image/choose_d.png";
						} else {
							v._choose = "source://view/do_IndexListView/image/choose.png";
						}
					} else {
						v._choose = "source://view/do_IndexListView/image/choose.png";
					}
				})
			} else {
				_all[key].map(function(v,k){
					v._choose = "source://view/do_IndexListView/image/choose.png";
				})
			}
		}
	}
	_chooseindex = _data;
	do_HashData.removeAll();
	do_HashData.addData(_all);
	ui("do_IndexListView_person").bindItems(do_HashData,index_arr);
	ui("do_IndexListView_person").refreshItems();
})

//长按事件
ui("do_IndexListView_person").on("longTouch",function(_data){
	deviceone.print(JSON.stringify(_data),"长按事件")
})