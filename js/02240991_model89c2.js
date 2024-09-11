//=== viewid:dh_style_28_1566538824375 ===//

/*pc,手机显示隐藏*/
function is_mobile(){
	return window.screen.width<767 || ($('body').width() > 0 && $('body').width() < 767);
}
$(function(){
	$("#dh_style_28_1566538824375 li").each(function(){
		  });
})


//=== viewid:dh_style_28_1566538824375 ===//

function navSwtich(obj) {
	$(obj).siblings(".menuUlCopy").slideToggle(200);
	$(obj).toggleClass('ontoggle');
	$(obj).parent().siblings().find(".menuUlCopy").slideUp(200);
	$(obj).parent().siblings().find(".fa-angle-down").removeClass('ontoggle');
}
function subLeft_dh_style_28_1566538824375(){
	$("#dh_style_28_1566538824375 .menuUl>li").each(function(){
		$(this).find(".menuUl03").css("left",'100%');
	})
}
$(window).resize(function() {
	subLeft_dh_style_28_1566538824375();
})
$(function(){
    
	$("#dh_style_28_1566538824375 .fa-navicon").click(function(){
        $("#dh_style_28_1566538824375").addClass('clearTransform');
		$("#dh_style_28_1566538824375 .menuUlCopy").each(function(){
			$(this).siblings(".fa").show();
		})
	})
	subLeft_dh_style_28_1566538824375();
		$("#dh_style_28_1566538824375 .subBox").css("top",$("#dh_style_28_1566538824375 .menuUl_box").height());
		
	if($("#dh_style_28_1566538824375 .menuUl").hasClass("noHover")){
		var tabNum = 0;
		$("#dh_style_28_1566538824375 .menuUl>li").find(".Onsub").each(function(){
			tabNum += 1;
			$(this).parent().attr("tabNum",tabNum)
		})
		$("#dh_style_28_1566538824375 .menuUl>li .Onsub").mouseover(function(){
			$("#dh_style_28_1566538824375 .subBox").show();
			var index = $(this).parent().attr("tabNum");
			$("#dh_style_28_1566538824375 .subBox .subItems").eq(index-1).fadeIn(100).siblings().hide();
							$("#dh_style_28_1566538824375 .subBox .subMenuImgArea .subMenuImgCon").eq(0).fadeIn(100).siblings().hide();
					})
						$("#dh_style_28_1566538824375 .subBox").mouseleave(function(){
			$(this).hide();
		});
		$("#dh_style_28_1566538824375 .menuUl>li .Nosub").mouseover(function(){
			$("#dh_style_28_1566538824375 .subBox").hide();
		})
		
		//风格41 42
					
		
		
	}
})
	var color = $('#dh_style_28_1566538824375 .menuStyle_28 .menuUl02 .subMenu02').css('background-color');
	$('#dh_style_28_1566538824375 .menuStyle_28').append(`<style>#dh_style_28_1566538824375 .menuStyle_28 .menuUl .rflex .menuUl02::before{border-bottom-color:${color}!important;}</style>`);
	$('#dh_style_28_1566538824375 .menuStyle_28 .menuUl02 .subMenu02').mouseover(function(){
		let that = $(this);
		setTimeout(function(){
			var hoverColor = that.css('background-color');
			$('#dh_style_28_1566538824375 .menuStyle_28').append(`<style>#dh_style_28_1566538824375 .menuStyle_28 .menuUl02 .arrow:hover::before{border-left-color:${hoverColor}!important;}</style>`);
		},100);
	});


//=== viewid:lang_style_1_1566869578228,lang_style_1_1566873573041 ===//
$(document).ready(function(){
});

//=== viewid:newsList_style_04_1566456705748 ===//
//--
				$(function(){
					var viewid="newsList_style_04_1566456705748";
					var sys_url="viewid=newsList_style_04_1566456705748&name=newsList&style=style_04&langid=2&pageid=2240991&viewCtrl=newsList&isfb=1";
					var moreParams='';
					if(typeof(history.pushState) != 'undefined'){
						var hstate=JSON.stringify(history.state);
						if(hstate!='null'&& hstate!=null){
							eval('var hjson = ' + hstate);
							moreParams=hjson.moreParamsnewsList_style_04_1566456705748;
						}
					}
					RequestURL(viewid,sys_url,moreParams);
				});
			//--

//=== viewid:dh_style_03_1566544058057 ===//

/*pc,手机显示隐藏*/
function is_mobile(){
	return window.screen.width<767 || ($('body').width() > 0 && $('body').width() < 767);
}
$(function(){
	$("#dh_style_03_1566544058057 li").each(function(){
		  });
})