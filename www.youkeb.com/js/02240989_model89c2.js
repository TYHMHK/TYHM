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

//=== viewid:productList_style_22_1566456678155 ===//
//--
				$(function(){
					var viewid="productList_style_22_1566456678155";
					var sys_url="viewid=productList_style_22_1566456678155&name=productList&style=style_22&langid=2&pageid=2240989&viewCtrl=default&isfb=1";
					var moreParams='';
					if(typeof(history.pushState) != 'undefined'){
						var hstate=JSON.stringify(history.state);
						if(hstate!='null'&& hstate!=null){
							eval('var hjson = ' + hstate);
							moreParams=hjson.moreParamsproductList_style_22_1566456678155;
						}
					}
					RequestURL(viewid,sys_url,moreParams);
				});
			//--

//=== viewid:productList_style_22_1566456678155 ===//

    $("#productList_style_22_1566456678155 .prod_default22 .prod_info").click(function(){
        let href = $(this).parents('.prod_Item').find('.prodImg_box .prod_img a').attr('href');
         window.location.href = href;     });
var showSub = '0';



//=== viewid:productList_style_22_1566444060303,productList_style_36_1664269008748,productList_style_05_1498112766363,productList_style_04_1498112543032,productList_style_22_1566456678155 ===//

    

//=== viewid:productList_style_22_1566456678155 ===//

if(typeof addcart !== 'function'){
	function addcart(pid,is_virtual,idspecprice,idpackage){
        var lang=2;
        if(lang == '0'){
            lang = Default_isFT;
            if(BodyIsFt == '0'){
                lang = BodyIsFt;
            }else if(BodyIsFt == '1'){
                lang = BodyIsFt;
            }
        }
        var packStr = '';
        if(typeof (idpackage) != 'undefined'){
            packStr = "&idpackage="+idpackage;
        }
		if(is_mobile()){
			var locationUrl = "https://admin.mifwl.com/exusers/u_cart.php?idweb=66083&lang="+lang+"&pid="+pid+"&act=add&ismobile=1" + packStr;
			if (idspecprice) locationUrl += "&IDSpecPrice["+pid+"]="+idspecprice;
			if (isNaN(pid)) {//如果不是数字，表示批量加入购物车
				locationUrl = "https://admin.mifwl.com/exusers/u_cart.php?idweb=66083&lang="+lang+"&act=add&ismobile=1" + pid + (idspecprice ? idspecprice : "");
			}
			var res = "0";
			if(res == '1' && is_virtual == 0){
				locationUrl+= "&use_ajax=1&callback=?";
				$.getJSON(locationUrl,function(ret){
				if(ret.i_AddFlag){
					$.alerts.dialogClass  = 'success';
					alert(ret.message);
				}
				});
			}else{
			    window.location = locationUrl;
			}

		}else{
			var locationUrl = "https://admin.mifwl.com/exusers/u_cart.php?idweb=66083&pid="+pid+"&act=add&lang="+lang+"&ispc=1" + packStr;
			if (idspecprice) locationUrl += "&IDSpecPrice["+pid+"]="+idspecprice;
			if (isNaN(pid)) {//如果不是数字，表示批量加入购物车
				locationUrl = "https://admin.mifwl.com/exusers/u_cart.php?idweb=66083&lang="+lang+"&act=add&ispc=1" + pid + (idspecprice ? idspecprice : "");
			}
			document.getElementById("boxName").innerHTML="View Shopping Cart";
			if(document.getElementById("boxClose")) document.getElementById("boxClose").innerHTML="×";
			document.getElementById("showiframe").src=locationUrl;
			box.Show({width:"840px",height:"420px"});
		}
	}
}

function is_mobile(){
	return window.screen.width<767 || ($('body').width() > 0 && $('body').width() < 767);
}
$(function(){
	$('#productList_style_22_1566456678155 .prod_infos .end_time').each(function(){
		purchase_clock(this);//开启倒计时
	});
});

//拼购倒计时
function purchase_clock(obj) {
	var time = parseInt($(obj).attr('data-time'));
	if (time > 0) {
		var str = '';
		var num = 0;
		num = parseInt(time/86400);
		if(num > 0)str += num.toString() + '天';
		time -= num * 86400;
		num = parseInt(time/3600);
		if(num > 0)str += num.toString() + '时';
		time -= num * 3600;
		num = parseInt(time/60);
		if(num > 0)str += num.toString() + '分';
		time -= num * 60;
		if(num > 0)str += time.toString() + '秒';
		$(obj).text(str).attr('data-time', parseInt($(obj).attr('data-time')) - 1);
		setTimeout(function(){
			purchase_clock(obj);
		}, 1000);
	} else {
		$(obj).text('0天0时0分0秒');
	}
}


//=== viewid:dh_style_03_1566544058057 ===//

/*pc,手机显示隐藏*/
function is_mobile(){
	return window.screen.width<767 || ($('body').width() > 0 && $('body').width() < 767);
}
$(function(){
	$("#dh_style_03_1566544058057 li").each(function(){
		  });
})