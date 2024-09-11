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

//=== viewid:image_style_11_1566459961053 ===//

                $(function(){
            let obj = $("#image_style_11_1566459961053");
            let picItems = obj.find("li.imgItems");
            let num = 0;
            let picBox;
            picItems.click(function(){
                let topH = $(window).scrollTop();
                let index = $(this).index();
                let curPic = $(this).find(".theimgdiv").css("backgroundImage");
                let curIcon,curIconStyle,curPicStyle;
                if(curPic){
                    curPic = curPic.replace('url(','').replace(')','').replaceAll('"','').replaceAll("'",'');
                    curPicStyle = '';
                    curIcon = '';
                    curIconStyle = 'display:none;';
                }else{
                    curPic = '';
                    curPicStyle = 'display:none;';
                    curIcon = $(this).find(".bbx-new-font").text();
                    curIconStyle = $(this).find(".bbx-new-font").attr('style');
                }
                num = index;
                let html = "<div class='imgShowBox'><im"+""+"g style='"+curPicStyle+"' src='"+curPic+"' alt=''><div class='bbx-new-font' style='"+curIconStyle+"'>"+curIcon+"</div><div class='imgButton'><span class='prevImg'><i class='fa fa-angle-left'></i></span><span class='closeShowPic'>×</span><span class='nextImg'><i class='fa fa-angle-right'></i></span></div></div>";
                let picBoxhtml = $(html);
                //"+""+"为了躲开图片延时加载的代码替换
                $("body").append(picBoxhtml);
                picBox = $(".imgShowBox");
                pdSize();
                //判断下一张和上一张按钮的显示
                if(picItems.length == 1){
                    $("body").find(".imgButton>.nextImg,.imgButton>.prevImg").css("visibility","hidden")
                }
                if(picItems.length-1 == $(this).index()){
                    $("body").find(".imgButton>.nextImg").css("visibility","hidden")
                }
                if($(this).index() == 0){
                    $("body").find(".imgButton>.prevImg").css("visibility","hidden")
                }
                //关闭
                $("body").find(".imgButton>.closeShowPic").click(function(){
                    $(".imgShowBox").remove();
                    $("body").removeClass("pos_fixed");
                    $(window).scrollTop(topH);
                });
                //下一张
                $("body").find(".imgButton>.nextImg").click(function(){
                    $(".imgShowBox img").css("max-height","none");
                    let len = obj.find("li:has('.imgCont')").length;
                    $(this).siblings().css("visibility","visible");
                    num++;
                    if(num >= len){ num = len-1; }
                    if(num == len-1){ $(this).css("visibility","hidden"); }
                    curPics();
                    pdSize();
                });
                //上一张
                $("body").find(".imgButton>.prevImg").click(function(){
                    $(".imgShowBox img").css("max-height","none");
                    $(this).siblings().css("visibility","visible");
                    num--;
                    if(num <= 0){
                        num = 0;
                        $(this).css("visibility","hidden");
                    }
                    curPics();
                    pdSize();
                });
            });
            //切换大图
            function curPics(){
                let that = obj.find("li").eq(num);
                let curPic = that.find(".theimgdiv").css("backgroundImage");
                let curIcon,curIconStyle,curPicStyle;
                let boxImg = picBox.find("img");
                let boxIcon = picBox.find(".bbx-new-font");
                if(curPic){
                    curPic = curPic.replace('url(','').replace(')','').replaceAll('"','').replaceAll("'",'');
                    boxImg.attr("src",curPic);
                    boxImg.show(0);
                    boxIcon.hide(0);
                }else{
                    curIcon = that.find(".bbx-new-font").text();
                    curIconStyle = that.find(".bbx-new-font").attr('style');
                    boxIcon.text(curIcon);
                    boxIcon.attr('style',curIconStyle);
                    boxImg.hide(0);
                }
            }
            //判断展开显示效果
            function pdSize(){
                let imgH = picBox.find("img").height();
                let winH = $(window).height();
                if(imgH>winH){
                    $("body").addClass("pos_fixed");
                    picBox.addClass("scroll");
                    picBox.animate({"scrollTop":"0px"},200);
                }else{
                    $("body").removeClass("pos_fixed");
                    picBox.removeClass("scroll");
                    $(".imgShowBox img").css("max-height","80%");
                }
            }
        })
            

//=== viewid:dh_style_03_1566544058057 ===//

/*pc,手机显示隐藏*/
function is_mobile(){
	return window.screen.width<767 || ($('body').width() > 0 && $('body').width() < 767);
}
$(function(){
	$("#dh_style_03_1566544058057 li").each(function(){
		  });
})