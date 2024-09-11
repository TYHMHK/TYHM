//=== viewid:dh_style_28_1566869446549 ===//

/*pc,手机显示隐藏*/
function is_mobile(){
	return window.screen.width<767 || ($('body').width() > 0 && $('body').width() < 767);
}
$(function(){
	$("#dh_style_28_1566869446549 li").each(function(){
		  });
})


//=== viewid:dh_style_28_1566869446549 ===//

function navSwtich(obj) {
	$(obj).siblings(".menuUlCopy").slideToggle(200);
	$(obj).toggleClass('ontoggle');
	$(obj).parent().siblings().find(".menuUlCopy").slideUp(200);
	$(obj).parent().siblings().find(".fa-angle-down").removeClass('ontoggle');
}
function subLeft_dh_style_28_1566869446549(){
	$("#dh_style_28_1566869446549 .menuUl>li").each(function(){
		$(this).find(".menuUl03").css("left",'100%');
	})
}
$(window).resize(function() {
	subLeft_dh_style_28_1566869446549();
})
$(function(){
    
	$("#dh_style_28_1566869446549 .fa-navicon").click(function(){
        $("#dh_style_28_1566869446549").addClass('clearTransform');
		$("#dh_style_28_1566869446549 .menuUlCopy").each(function(){
			$(this).siblings(".fa").show();
		})
	})
	subLeft_dh_style_28_1566869446549();
		$("#dh_style_28_1566869446549 .subBox").css("top",$("#dh_style_28_1566869446549 .menuUl_box").height());
		
	if($("#dh_style_28_1566869446549 .menuUl").hasClass("noHover")){
		var tabNum = 0;
		$("#dh_style_28_1566869446549 .menuUl>li").find(".Onsub").each(function(){
			tabNum += 1;
			$(this).parent().attr("tabNum",tabNum)
		})
		$("#dh_style_28_1566869446549 .menuUl>li .Onsub").mouseover(function(){
			$("#dh_style_28_1566869446549 .subBox").show();
			var index = $(this).parent().attr("tabNum");
			$("#dh_style_28_1566869446549 .subBox .subItems").eq(index-1).fadeIn(100).siblings().hide();
							$("#dh_style_28_1566869446549 .subBox .subMenuImgArea .subMenuImgCon").eq(0).fadeIn(100).siblings().hide();
					})
						$("#dh_style_28_1566869446549 .subBox").mouseleave(function(){
			$(this).hide();
		});
		$("#dh_style_28_1566869446549 .menuUl>li .Nosub").mouseover(function(){
			$("#dh_style_28_1566869446549 .subBox").hide();
		})
		
		//风格41 42
					
		
		
	}
})
	var color = $('#dh_style_28_1566869446549 .menuStyle_28 .menuUl02 .subMenu02').css('background-color');
	$('#dh_style_28_1566869446549 .menuStyle_28').append(`<style>#dh_style_28_1566869446549 .menuStyle_28 .menuUl .rflex .menuUl02::before{border-bottom-color:${color}!important;}</style>`);
	$('#dh_style_28_1566869446549 .menuStyle_28 .menuUl02 .subMenu02').mouseover(function(){
		let that = $(this);
		setTimeout(function(){
			var hoverColor = that.css('background-color');
			$('#dh_style_28_1566869446549 .menuStyle_28').append(`<style>#dh_style_28_1566869446549 .menuStyle_28 .menuUl02 .arrow:hover::before{border-left-color:${hoverColor}!important;}</style>`);
		},100);
	});


//=== viewid:lang_style_1_1566869578228 ===//
$(document).ready(function(){
});

//=== viewid:dh_style_03_1566453251567 ===//

/*pc,手机显示隐藏*/
function is_mobile(){
	return window.screen.width<767 || ($('body').width() > 0 && $('body').width() < 767);
}
$(function(){
	$("#dh_style_03_1566453251567 li").each(function(){
		  });
})