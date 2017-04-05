	   //分页
	   $(document).ready(function(){
			$('#test').twbsPagination({
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
		        	var oList=document.getElementById('tabUl');
					var aList=oList.getElementsByTagName('li');
					var listContentDiv=document.getElementById('listContent');
					var lcDiv=listContentDiv.getElementsByTagName('div');
						$.getUrlParam = function(name) {
					　　　　var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");//正则表达(tab_id会被传进来)
					　　　　var r = window.location.search.substr(1).match(reg);
					　　　　if(r != null) return unescape(r[2]);
					　　　　return null;
					　　}
					　　var url_status = $.getUrlParam('tab');
					　　if(url_status == 1) {
						
							aList[0].className='active';//选项卡第一个被高亮
					　　　　aList[1].className='';
						    aList[2].className='';
						    lcDiv[0].className="active tab-content list";
						    document.onclick=function()
								{ var obj = event.srcElement; 
								if(obj.type == "tab2"||obj.type=="tab3"){ //选项卡id(tab2 tab3)如果被点击,tab1所对应的内容要被隐藏
								$('#tab1').hide();
								$('#tab1').hide();
									}
								if(obj.type == "tab1"){
									//点击选项卡1的时候,内容出现
									$('#tab1').show();
									
									}
								} 
								
					   
						}else if(url_status == 2){
							aList[0].className='';
					　　　　aList[1].className='active';
						    aList[2].className='';
						   lcDiv[1].className="active tab-content list";
						   document.onclick=function()
								{ var obj = event.srcElement; 
								if(obj.type == "tab1"||obj.type=="tab3"){ 
								$('#tab2').hide();
								$('#tab2').hide();
									}
								if(obj.type == "tab2"){
									$('#tab2').show();
									
									}
								} 
						    
						}else if(url_status == 3){
							aList[0].className='';
					　　　　aList[1].className='';
						    aList[2].className='active';
						    lcDiv[2].className="active tab-content list";
						    document.onclick=function()
								{ var obj = event.srcElement; 
								if(obj.type == "tab1"||obj.type=="tab2"){ 
								$('#tab3').hide();
								$('#tab3').hide();
									}
								if(obj.type == "tab3"){
									$('#tab3').show();
									
									}
								} 
						}
						
			}