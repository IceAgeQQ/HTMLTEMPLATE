
function GetObj(objName){
	if(document.getElementById){
		return eval('document.getElementById("' + objName + '")');
	}else if(document.layers){
		return eval("document.layers['" + objName +"']");
	}else{
		return eval('document.all.' + objName);
	}
}

function chgTab(id1,id2){
	for(var i=1;i<=5;i++){
		if(!GetObj("Tab"+id1+i)){continue}
		GetObj("Tab"+id1+i).className = "";
		GetObj("Con"+id1+i).style.display = "none";
	}
	GetObj("Tab"+id1+id2).className = "on";
	GetObj("Con"+id1+id2).style.display = "block";
}

