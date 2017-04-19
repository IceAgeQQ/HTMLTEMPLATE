	   //分页
	   /*$(document).ready(function(){

			$('#pagenation').twbsPagination({
				totalPages:5,
				visiblePages:3,
				onPageClick: function (event, page) {
                console.info(page + ' (from options)');
            }
				
			});
			$('#pagenation1').twbsPagination({
				totalPages:5,
				visiblePages:3,
				onPageClick: function (event, page) {
                console.info(page + ' (from options)');
            }
				
			});
			$('#pagenation2').twbsPagination({
				totalPages:5,
				visiblePages:3,
				onPageClick: function (event, page) {
                console.info(page + ' (from options)');
            }
				
			});
			
		});*/
		//分页查询
		function createPagenation(id){
			
			$('#'+id).twbsPagination({
				totalPages:5,
				visiblePages:3,
				onPageClick: function (event, page) {

				console.info(page + ' (from options)');
						//选项卡1
						if(id=='pagenation'){
							
							if(page >1){
							$.get("http://192.168.1.183:8080/orbita/w/page?page=0&id=3",
							        function(data){
							        //alert("数据: \n" + data.data.size);
							        title = data.data.page[0].title;
							       // alert("the title is :" +title);
							        var html='';
							        html = "<a href=orbita-newsModel.html>"+title+"</a>";
								    var mydigit=0;
							        for(var i=0;i<4;i++){
							       	$('#tab0li'+i).html(html); 
								   // $('#litest'+i).text(title);
							        }  
						
							    });	
							}else{
								var html='';
							    html = "<a href=orbita-newsModel.html>1111111111</a>"
							    for(var i=0;i<4;i++){
							         $('#tab0li'+i).html(html); 
								    //$('#litest'+i).text(mydigit);
							        }  
							}
						}
						//选项卡2
						if(id=='pagenation1'){
							
							if(page >1){
							$.get("http://192.168.1.183:8080/orbita/w/page?page=0&id=3",
							        function(data){
							        //alert("数据: \n" + data.data.size);
							        title = data.data.page[0].title;
							       // alert("the title is :" +title);
							        var html='';
							        html = "<a href=orbita-newsModel.html>"+title+"</a>";
								    var mydigit=0;
							        for(var i=0;i<4;i++){
							       	$('#tab1li'+i).html(html); 
								   // $('#litest'+i).text(title);
							        }  
						
							    });	
							}else{
								var html='';
							    html = "<a href=orbita-newsModel.html>1111111112</a>"
							    for(var i=0;i<4;i++){
							         $('#tab1li'+i).html(html); 
								    //$('#litest'+i).text(mydigit);
							        }  
							}
						}
						//选项卡3
						if(id=='pagenation2'){
							
							if(page >1){
							$.get("http://192.168.1.183:8080/orbita/w/page?page=0&id=3",
							        function(data){
							        //alert("数据: \n" + data.data.size);
							        title = data.data.page[0].title;
							       // alert("the title is :" +title);
							        var html='';
							        html = "<a href=orbita-newsModel.html>"+title+"</a>";
								    var mydigit=0;
							        for(var i=0;i<4;i++){
							       	$('#tab2li'+i).html(html); 
								   // $('#litest'+i).text(title);
							        }  
						
							    });	
							}else{
								var html='';
							    html = "<a href=orbita-newsModel.html>1111111113</a>"
							    for(var i=0;i<4;i++){
							         $('#tab2li'+i).html(html); 
								    //$('#litest'+i).text(mydigit);
							        }  
							}
						}
					}
				});
		}
		//选项卡跳转内容也会跳转
		window.onload=function()  
		        {	
		        	var size=0;
		        	$.post("http://192.168.1.183:8080/orbita/w/newslist",
				    {
				       /* name:"菜鸟教程",
				        url:"http://www.runoob.com"*/
				    },
				        function(data){
				        //alert("数据: \n" + data.data.size);
				        size = data.data.size;
				        createTabBySize(size);
				       
				    });
				    
				    function createTabBySize(size){
					    var oList=document.getElementById('tabUl');
						var aList=oList.getElementsByTagName('li');
						var listContentDiv=document.getElementById('listContent');
						var lcDiv=listContentDiv.getElementsByTagName('div');
						var aType=oList.getElementsByTagName('a');
						var ulList=listContentDiv.getElementsByTagName('ul');
						
						
							$.getUrlParam = function(name) {
						　　　　var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");//正则表达(tab_id会被传进来)
						　　　　var r = window.location.search.substr(1).match(reg);
						　　　　 if(r != null) return unescape(r[2]);
						　　　　 return null;
						　　}
							
						var url_status = $.getUrlParam('tab');
						var tabs=new Array(size); 

						//循环变量 tabs .如果当前tab的id等于url_status传过来的id. 使其被点击
						for(var i=0;i<size;i++){
							var typeId=aType[i].attributes["type"].value;
							tabs[i]=typeId;
							var pageId = ulList[i].attributes["id"].value; //获取pageId
							createPagenation(pageId);//每个选项卡都创建一次分页栏
							//判断当前选中的tab
							if(i==url_status){
								aType[i].click();
								//一开始进入新闻页的时候,选项卡被激活后,同时激活分页栏
								createPagenation(pageId);
							
								
							}
						}
							//tab点击事件
							document.onclick=function(){ 
								var obj = event.srcElement;	
								for(var i=0;i<tabs.length;i++){
									if(tabs[i]==obj.type){  //判断当前点击哪个tag,显示
										$(tabs[i]).show();
										//点击选项卡,激活分页栏
										var pageId = ulList[i].attributes["id"].value;
										createPagenation(pageId);
									}else{//否则 隐藏
										$(tabs[i]).hide();
									}
									
								}
								//分页回调函数
								
	
								}
								
							
						　　
		        }
						
		}
				    