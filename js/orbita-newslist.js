	   //分页
	   $(document).ready(function(){
	   	
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
		});
		
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
							
							//判断当前选中的tab
							if(i==url_status){
								aType[i].click();	
							}
						}
							//tab点击事件
							document.onclick=function(){ 
								var obj = event.srcElement;	
								for(var i=0;i<tabs.length;i++){
									if(tabs[i]==obj.type){  //判断当前点击哪个tag,显示
										$(tabs[i]).show();
										
									}else{//否则 隐藏
										$(tabs[i]).hide();
									}
									
								}
								//分页回调函数
								
	
								}
								
							
						　　
		        }
						
		}
				    