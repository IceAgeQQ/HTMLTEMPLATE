
(function($){
	$.fn.textSlider = function(settings){    
        settings = jQuery.extend({
        	speed : "normal",
			line : 2,
			timer : 1000
    	}, settings);
		return this.each(function() {
			$.fn.textSlider.scllor( $( this ), settings );
    	});
    }; 
	$.fn.textSlider.scllor = function($this, settings){
		//alert($this.html());
		var ul = $( "ul:eq(0)", $this );
		var timerID;
		var li = ul.children();
		var _btnLeft=$(".up:eq(0)", $this)
		var _btnRight=$(".down:eq(0)", $this)
		var liHight=$(li[0]).width()+60;
		var upHeight=0-settings.line*liHight;//滚动的高度；
		var scrollLeft=function(){
			_btnLeft.unbind("click",scrollLeft);
			ul.animate({marginLeft:upHeight},settings.speed,function(){
				for(i=0;i<settings.line;i++){
                	 //$(li[i]).appendTo(ul);
					 ul.find("li:first").appendTo(ul);
					// alert(ul.html());
                }
               	ul.css({marginLeft:0});
                _btnLeft.bind("click",scrollLeft); //Shawphy:绑定向上按钮的点击事件
			});	
		};
		var scrollRight=function(){
			_btnRight.unbind("click",scrollRight);
			ul.css({marginLeft:upHeight});
			for(i=0;i<settings.line;i++){
				ul.find("li:last").prependTo(ul);
            }
			ul.animate({marginLeft:0},settings.speed,function(){
                _btnRight.bind("click",scrollRight); //Shawphy:绑定向上按钮的点击事件
			});	
		};
		var autoPlay=function(){
			timerID = window.setInterval(scrollLeft,settings.timer);
			//alert(settings.timer);
		};
		var autoStop = function(){
            window.clearInterval(timerID);
        };
		//事件绑定
		ul.hover(autoStop,autoPlay).mouseout();
		_btnLeft.css("cursor","pointer").click( scrollLeft );
		_btnLeft.hover(autoStop,autoPlay);
		_btnRight.css("cursor","pointer").click( scrollRight );
		_btnRight.hover(autoStop,autoPlay)
	};
})(jQuery);