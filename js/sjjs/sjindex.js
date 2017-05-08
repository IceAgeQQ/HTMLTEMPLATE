$(function(){
	var ie = !-[1,],lock = true;
	$('.main_nav').hover(function(){
		var _this = $(this);
		asdsa = setTimeout(function(){
			if(_this.find('li').length>0){
				_this.find('.sub_nav_list').show(300,'easeInOutQuart');
				_this.find('.main_nav_list').addClass('hover');
			}else{
				_this.find('.main_nav_list').addClass('hover');
			}
		},200);
	},function(){
		clearTimeout(asdsa);
		$(this).find('.sub_nav_list').hide(500,'easeInOutQuart');
		$(this).find('.main_nav_list').removeClass('hover');
	});
	
//end	
});

$(function(){
	$("#main .right .zhaopin ul .da:has(.tab)").each(function(index){
		$("#main .right .zhaopin .title2:eq("+index+")").toggle(function(){
		$("#main .right .zhaopin ul .da:eq("+index+")").children(".tab").stop(true,true).slideDown(500)
		$("#main .right .zhaopin .title2:eq("+index+")").addClass("hover")
		},function(){
		$("#main .right .zhaopin ul .da:eq("+index+")").children(".tab").stop(true,true).slideUp(500)
		$("#main .right .zhaopin .title2:eq("+index+")").removeClass("hover")
		})
	})
})

$(function() {
    //集体调用
    $(".form input").each(function(){
        $(this).setDefauleValue();
    });
    //单个调用
    $("#key").setDefauleValue();
    $("#key2").setDefauleValue();
    $("#key3").setDefauleValue();
})
 
//设置input,textarea默认值
$.fn.setDefauleValue = function() {
    var defauleValue = $(this).val();
    $(this).val(defauleValue).css("color","#b8b8b8");
 
    return this.each(function() {       
        $(this).focus(function() {
            if ($(this).val() == defauleValue) {
                $(this).val("").css("color","#333");//输入值的颜色
            }
        }).blur(function() {
            if ($(this).val() == "") {
                $(this).val(defauleValue).css("color","#b8b8b8");//默认值的颜色
            }
        });
    });
}

$(function(){
	$("#main .mains .mainCen .lie tr:odd").css("background","#f7f7f7")
	$("#main .news ul li:odd").addClass("last")
	$("#main .Data ul li:odd").addClass("last")
	$("#main .publication .sanji a:last").addClass("last")
	$("#main .Satellite .xq .jieshao dl dd .tab li:last").addClass("last")
})

$(function(){
 $("#footer .foot .link ul li:has(span)").hover(function(){
  $(this).children('span').stop(true,true).slideDown(1)
  },function(){
  $(this).children('span').stop(true,true).slideUp(1)
  })
})


$(function(){
	$("#header .navs .search:has(.search1)").each(function(index){
		$("#header .navs .search .sh:eq("+index+")").toggle(function(){
		$("#header .navs .search:eq("+index+")").children(".search1").stop(true,true).slideDown(300)
		$("#header .navs .search .sh:eq("+index+")").addClass("hover")
		},function(){
		$("#header .navs .search:eq("+index+")").children(".search1").stop(true,true).slideUp(300)
		$("#header .navs .search .sh:eq("+index+")").removeClass("hover")
		})
	})
})


$(function (){
	$("#main .Satellite .xq .jieshao dl dd .tab li").each(function(index){//each变例，每一个a标签
		$(this).click(function(){//鼠标滑过a的时候
			$("#main .Satellite .xq .jieshao dl dd .tabCen").addClass("dis")//给news添加样式dis
			$("#main .Satellite .xq .jieshao dl dd .tabCen:eq("+index+")").removeClass("dis")//给对应news的index索引值删除dis样式
			$("#main .Satellite .xq .jieshao dl dd .tab li").removeClass("hover")//先删除所有的a的样式hover
			$(this).addClass("hover")//给对应的a添加样式hover
		})
	})
})

$(function (){
	$("#header .navs .nav ul li:last").addClass("last")
})

/*导航*/
$(function(){
 $(".nav ul li:has(div)").hover(function(){
  $(this).children("div").stop(true,true).slideDown(300)
  },function(){
  $(this).children("div").stop(true,true).slideUp(1)
  })
})


$(function (){
	$(".nav ul li").each(function(index){
		$(this).mouseover(function(){
			$(".nav ul li").removeClass("hover")//先删除所有的a的样式hover
			$(this).addClass("hover")//给对应的a添加样式hover
		})
		$(this).mouseout(function(){
			$(".nav ul li").removeClass("hover")//先删除所有的a的样式hover
		})
	})
})