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

//=== viewid:prodPic_style_02_1482461252881 ===//
if (typeof change_prod_spec_img_style_02 != "function") {
    function change_prod_spec_img_style_02(spec_img) {
		var view_id2 = $('.style_02.prodPic').attr('id');
		window.clearInterval(window.timer);
		
		// 电脑端
		var first_li =  $('.style_02.prodPic .diy_moreImg .diyproImgBox ul');
		var proImgBox =  $('.style_02.prodPic .diy_moreImg .diyproImgBox');
		var img_str =  $('.style_02.prodPic .diy_proImg #CurShowProImg');
		if (first_li.length > 0) {
			if (typeof  spec_img == "string") spec_img = spec_img.split(',');
			proImgBox.empty();
			var temp_str = '<ul class="diy_qbox" style="width: 440px;!important;">';
			img_str.attr('src',spec_img[0]);
			img_str.attr('rel',spec_img[0]);
			$.each(spec_img, function () {
				temp_str += '<li style=""><img  src';
				temp_str += '="'+this+'" urlsrc';
				temp_str += '="'+this+'" onmouseover="ChangeCurProImg'+view_id2+'(this);" /></li>';
			})
			temp_str += '</ul>';
			proImgBox.append(temp_str);
		} else {
			img_str.attr('src',spec_img);
			img_str.attr('rel',spec_img);
		}
		setTimeout(function(){
		    if($('#'+view_id2+' .diy_qbox li').length>4){
				$('#'+view_id2+' #spec-list').jdMarquee({
					deriction: 'left',
					height: 78,
					step: 1,
					speed: 4,
					delay: 5,
					control: true,
					_front: '#spec-right',
					_back: '#spec-left',
				});
			}
		},50);
		$('#'+view_id2+' #CurShowProImg').imagezoom({xzoom: $('#'+view_id2+' #diyProBox').width(), yzoom: $('#'+view_id2+' #diyProBox').height()});
		
		// 手机端
		var mfirst_li =  $('.style_02.prodPic .diyproImgBox_moblie .main_image ul');
		if (mfirst_li) {
			var flicking_con =  $('.style_02.prodPic .diyproImgBox_moblie .flicking_con');
			if (typeof  spec_img == "string")spec_img = spec_img.split(',');
			mfirst_li.empty();
			flicking_con.empty();
			$.each(spec_img, function (i) {
				mfirst_li.append("<li><span  class='img_"+i+"' style='background:url("+this+") center top no-repeat'></span></li>");
				flicking_con.append('<a href="#" class="'+(i==0 ? 'on' : '')+'">'+i+'</a>');
			});
		}
		var mfirst_main = $('.style_02.prodPic .diyproImgBox_moblie .main_image').clone();
		$('.style_02.prodPic .diyproImgBox_moblie .main_image').empty();
		$('.style_02.prodPic .diyproImgBox_moblie .main_image').append(mfirst_main.html());
		$('.style_02.prodPic').each(function () {
		    var view_id = $(this).attr('id');
		    var name_str = view_id+'startProdPic();';
		    eval(name_str);
		});
		
    }
}

//=== viewid:prodPic_style_02_1482461252881 ===//
//--
				$(function(){
					var viewid="prodPic_style_02_1482461252881";
					var sys_url="viewid=prodPic_style_02_1482461252881&name=prodPic&style=style_02&langid=0&pageid=2240981&viewCtrl=default&isfb=1";
					var moreParams='';
					if(typeof(history.pushState) != 'undefined'){
						var hstate=JSON.stringify(history.state);
						if(hstate!='null'&& hstate!=null){
							eval('var hjson = ' + hstate);
							moreParams=hjson.moreParamsprodPic_style_02_1482461252881;
						}
					}
					RequestURL(viewid,sys_url,moreParams);
				});
			//--

//=== viewid:prodPic_style_02_1482461252881 ===//

        if (typeof change_prod_spec_img != "function") {
        function change_prod_spec_img(spec_img) {
            if (spec_img) {
                if (typeof change_prod_spec_img_style_01 == "function") {
                    change_prod_spec_img_style_01(spec_img);
                }
                if (typeof change_prod_spec_img_style_02 == "function") {
                    change_prod_spec_img_style_02(spec_img);
                }
                if (typeof change_prod_spec_img_style_03 == "function") {
                    change_prod_spec_img_style_03(spec_img);
                }
                if (typeof change_prod_spec_img_style_04 == "function") {
                    change_prod_spec_img_style_04(spec_img);
                }
            }
        }
    }


//=== viewid:productList_style_05_1498112766363 ===//
//--
				$(function(){
					var viewid="productList_style_05_1498112766363";
					var sys_url="viewid=productList_style_05_1498112766363&name=productList&style=style_05&langid=0&pageid=2240981&viewCtrl=default&isfb=1";
					var moreParams='';
					if(typeof(history.pushState) != 'undefined'){
						var hstate=JSON.stringify(history.state);
						if(hstate!='null'&& hstate!=null){
							eval('var hjson = ' + hstate);
							moreParams=hjson.moreParamsproductList_style_05_1498112766363;
						}
					}
					RequestURL(viewid,sys_url,moreParams);
				});
			//--

//=== viewid:productList_style_05_1498112766363,productList_style_04_1498112543032 ===//

var showSub = '0';



//=== viewid:productList_style_22_1566444060303,productList_style_36_1664269008748,productList_style_05_1498112766363,productList_style_04_1498112543032 ===//

    

//=== viewid:productList_style_05_1498112766363 ===//

if(typeof addcart !== 'function'){
	function addcart(pid,is_virtual,idspecprice,idpackage){
        var lang=0;
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
			document.getElementById("boxName").innerHTML="加入购物车";
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
	$('#productList_style_05_1498112766363 .prod_infos .end_time').each(function(){
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


//=== viewid:prodInfor_style_04_1566468078300 ===//
var SpecDebug = false;
/**
  * @Content:获取某个区域(div id="#spec_{s_Hash}")所选择的各个规格所选中的
  * @Author:zhaogh
  * @Version:10.0.0
  * @Param:s_Hash varchar 区域特征
  * @Return:[{DataIndex:0,DataVal:'#FFFFF'}]
  */
 $.ajaxSetup({ cache: false });
function SpecCurSelect(s_Hash){
	var arrReturn = [];
	var curArea = $("#spec_"+s_Hash);
	$(".sys_item_spec .sys_item_specpara",curArea).each(function(){
		$("li",$(this)).each(function(){
			if($(this).hasClass('selected')){
				var curData = {
					'DataIndex' :	$(this).data('index'),
					'DataVal'	:	$(this).data('aid'),
				};
				arrReturn.push(curData);
			}
		});
	});
	return arrReturn;
}

function SpecGetAttrPrice(s_Hash,is_int){//是否取整
	if(typeof(is_int)=="undefined") var is_int = 0;
	var curArea = $("#spec_"+s_Hash);
	var defaultstats=true;
	
	var _val='';
	var _resp={
		mktprice:".sys_item_mktprice",
		price:".sys_item_price"
	}
	
	$(".sys_item_spec .sys_item_specpara",curArea).each(function(){
		var i=$(this);
		
		var v=i.attr("data-attrval");
		if(!v){
			defaultstats=false;
		}else{
			_val+=_val!=""?"_":"";
			_val+=v;
		}
	});

	var curResult = {};
	
	if(!!defaultstats){
		if (!sys_item.hasOwnProperty('sys_attrprice') || !sys_item['sys_attrprice'].hasOwnProperty(s_Hash) || !sys_item['sys_attrprice'][s_Hash].hasOwnProperty(_val)) {
			return false;
		}
		var curResult = sys_item['sys_attrprice'][s_Hash][_val];
		_price = curResult['price'];
		var backprice = _price;
		//_price = sys_item['sys_attrprice'][s_Hash][_val]['price'];
		SpecIDSpecPriceSet(s_Hash,sys_item['sys_attrprice'][s_Hash][_val]['IDSpecPrice']);
		SpecIDSpecStockSet(s_Hash,sys_item['sys_attrnum'][s_Hash][_val]['num']);

		if(sys_item['sys_attrnum'][s_Hash][_val]['num']>0){//不是不限库存的
			var curNum = parseInt($("#"+s_Hash+"_ProdNum").val());
			if(!curNum || curNum<1)curNum = 1;

			var diffNum = sys_item['sys_attrnum'][s_Hash][_val]['num']-sys_item['sys_attrnum'][s_Hash][_val]['nums'];
			$("#"+s_Hash+"_ProdNum").attr('data-maxnum',diffNum);
			CheckStock(s_Hash);
		}
        //更改图片
        if (typeof change_prod_spec_img == "function") change_prod_spec_img(sys_item['sys_attrprice'][s_Hash][_val]['spec_img']);
	}else{
		
		var curResult = false;
		var allNum = 0;
		$.each(sys_item['sys_attrnum'][s_Hash],function(i,item){
			allNum = allNum+parseInt(item.num);
		});
		SpecIDSpecStockSet(s_Hash,allNum);
		//var curResult = sys_item['price'][s_Hash];
		//_price = curResult['price'];
		//_mktprice = sys_item['mktprice'];
		_price = sys_item['price'][s_Hash];
		var backprice = _price;
	}

	_price = price_format(_price);

	//输出价格
	var newPriceObj = $("#"+sys_item['price_id'][s_Hash]['HTMLPriceNewID']);
	if(newPriceObj){
		if(is_int==1){
			if(typeof(_price)=='string') _price = _price.replace(/,/g, "");
			_price = parseFloat(_price);
			_price = Math.round(_price);
		} 
		newPriceObj.text(_price);
	}
	if (sys_item['price_id'][s_Hash]['HTMLPriceOldID']) var oldPriceObj = $("#"+sys_item['price_id'][s_Hash]['HTMLPriceOldID']);
	if(oldPriceObj){
		if(is_int==1){
			var oldprice = sys_item['price_old'][s_Hash];
			if(typeof(oldprice)=='string') sys_item['price_old'][s_Hash] = oldprice.replace(/,/g, "");
			sys_item['price_old'][s_Hash] = parseFloat(sys_item['price_old'][s_Hash]);
			sys_item['price_old'][s_Hash] = Math.round(sys_item['price_old'][s_Hash]);
		} 
		oldPriceObj.text(sys_item['price_old'][s_Hash]);
	}
    var packagePriceObj = $("#"+sys_item['price_id'][s_Hash]['HTMLPricePID']);
    if(packagePriceObj && curResult){
        var resPrice = 0;
        var resPriceFormat = 0.00;
        if(curResult['price']) {
            resPrice = curResult['price'];
            resPriceFormat = curResult['price_format'];
            $(".packageTips").css("display","none");
        }
        if (curResult['mprice']){
            resPrice = curResult['mprice'];
            resPriceFormat = curResult['mprice_format'];
            $(".packageTips").css("display","none");
        }
        if(curResult['PackagePrice']) {
            resPrice = curResult['PackagePrice'];
            resPriceFormat = curResult['PackagePrice_format'];
            $(".packageTips").css("display","block");
        }
        if(resPrice){
            if(is_int==1){
                if(typeof(resPrice)=='string') resPrice = resPrice.replace(/,/g, "");
                resPrice = parseFloat(resPrice);
                resPrice = Math.round(resPrice);//是否取整
                packagePriceObj.text(resPrice);
            }
            else{
                packagePriceObj.text(resPriceFormat);
            }
        }else{
            packagePriceObj.text("无");
        }
    }

	// var memberPriceObj = $("#"+sys_item['price_id'][s_Hash]['HTMLPriceMID']);
	// if(memberPriceObj && curResult && curResult["mprice"]){
	// 	if(curResult['mprice']){
	// 		if(is_int==1){
	// 			var mprice = curResult['mprice'];
	// 			if(typeof(mprice)=='string') curResult['mprice'] = mprice.replace(/,/g, "");
	// 			curResult['mprice'] = parseFloat(curResult['mprice']);
	// 			curResult['mprice'] = Math.round(curResult['mprice']);//是否取整
	// 		}
	// 		curResult['mprice'] = price_format(curResult['mprice']);
    //
	// 		memberPriceObj.text(curResult['mprice']);
	// 	}else{
	// 		memberPriceObj.text("无");
	// 	}
	// }
    //
	// //上面那个mprice有什么用的，俊杰看看，我先重写一个让多规格能够正常使用先 by zhaobin
    //
	// var PriceObj = $("#"+sys_item['price_id'][s_Hash]['HTMLPricePID']);
	// if(PriceObj && curResult && curResult["price"] && !curResult['PackagePrice']){
	// 	if(curResult['price']){
	// 		if(is_int==1) {
	// 			var price = curResult['price'];
	// 			if(typeof(price)=='string') curResult['price'] = price.replace(/,/g, "");
    //
	// 			curResult['price'] = parseFloat(curResult['price']);
	// 			curResult['price'] = Math.round(curResult['price']);//是否取整
	// 		}
    //
	// 		curResult['price'] = price_format(curResult['price']);
	//
	// 		PriceObj.text(curResult['price']);
	// 	}else{
	// 		PriceObj.text("无");
	// 	}
	// }
}

function CheckStock(s_Hash){
	var prodnumObj = $("#"+s_Hash+"_ProdNum");
	var curNum = parseInt(prodnumObj.val());
	var maxNum = parseInt(prodnumObj.data('maxnum'));
	if(!curNum || curNum<1)curNum = 1;
    var tipStr = '';
    if(lang == 2){
        tipStr = 'INV:';
    }else if(lang == 0 || lang == 1){
        tipStr = '剩余库存:';
    }else{
        tipStr = remaining_inventory+':';
        //return;
    }
	if(maxNum<curNum){
		$("#"+s_Hash+"_ErrMsg").html(tipStr+maxNum);
		prodnumObj.val(maxNum);
	}else{
		$("#"+s_Hash+"_ErrMsg").html("");
	}
}

function SpecIDSpecPriceGet(s_Hash){
	return $("#IDSpecPrice_"+s_Hash).val();
}

function SpecIDSpecPriceSet(s_Hash,i_IDSpecPrice){
	return $("#IDSpecPrice_"+s_Hash).val(parseInt(i_IDSpecPrice));
}

function SpecIDSpecStockGet(s_Hash){
	return $("#IDSpecStock_"+s_Hash).html();
}

function SpecIDSpecStockSet(s_Hash,SpecStock){
	if($("#IDSpecStock_"+s_Hash)) return $("#IDSpecStock_"+s_Hash).html(parseInt(SpecStock));
}

//首次进入页面会执行这个函数
function SpecRequestNum(s_Hash,i_IDProduct,i_IDPackage,is_int){
	if(typeof(is_int)=="undefined") var is_int = 0;
	var postUrl = s_SpecServer+"/include/spectools.ajax.php?callback=?";
	var postData = {
		'Action'	:	'SpecRequestNum',
		'IDWebSite'	:	i_IDWebSite,
		'IDProduct'	:	i_IDProduct,
		'IDPackage'	:	i_IDPackage,
	};
	$.getJSON(postUrl,postData,function(resultInfo){
		if(!sys_item['sys_attrnum'][s_Hash])sys_item['sys_attrnum'][s_Hash] = {};
		
		sys_item['sys_attrnum'][s_Hash] = resultInfo;
		AjaxCountRequest(s_Hash,is_int);
	});
}

function AjaxCountRequest(s_Hash,is_int){
	if(typeof(is_int)=="undefined") var is_int = 0;
	if(typeof NeedShowDefault=="underfined")return false;
	i_AjaxCount+= 1;
	if(i_AjaxCount==2){
		SpecGetAttrPrice(s_Hash,is_int);
	}
}


function SpecRequestPrice(s_Hash,i_IDProduct,i_IDPackage){
	var postUrl = s_SpecServer+'/include/spectools.ajax.php?callback=?&timestamp=' + new Date().getTime();
	var postData = {
		'Action'	:	'SpecRequestPrice',
		'IDWebSite'	:	i_IDWebSite,
		'IDProduct'	:	i_IDProduct,
		'IDPackage'	:	i_IDPackage,
	};

	$.getJSON(postUrl,postData,function(resultInfo){
		if(!sys_item['sys_attrprice'][s_Hash])sys_item['sys_attrprice'][s_Hash] = {};//初始化
		
		sys_item['sys_attrprice'][s_Hash] = resultInfo;
		AjaxCountRequest(s_Hash,0);
	});
}

function SpecRequestAttr(s_Hash,i_IDProduct,i_IDPackage){
	var curArea = $("#spec_"+s_Hash);
	var curSelect = SpecCurSelect(s_Hash);
	SpecIDSpecPriceSet(s_Hash,0);

	var postUrl = s_SpecServer+'/include/spectools.ajax.php?callback=?';
	var postData = {'Action':'SpecRequestAttr','IDWebSite':i_IDWebSite,'IDProduct':i_IDProduct,'IDPackage':i_IDPackage};
	if(curSelect){
		postData["CurSelect"] = curSelect;
	}
	
	$.getJSON(postUrl,postData,function(attrInfo){
		for(var i_Index in attrInfo){
			var curAttrList = attrInfo[i_Index];
			var divArea = $("#spec_"+s_Hash);
			$("li[data-index='"+i_Index+"']",divArea).each(function(){
				var curLi = $(this);
				var canSelect = false;
				for(var j=0;j<curAttrList.length;j++){
					if(curLi.data('aid')==curAttrList[j]){
						canSelect = true;break;
					}
				}
				curLi.removeClass('noallowselect');
				if(!canSelect){
					//curLi.addClass('noallowselect');//临时屏蔽，咸良说不要灰化
				}
				
				//如果是选中了，但不能被选，则取消选中
				if(curLi.hasClass('selected') && !canSelect){
					curLi.removeClass('selected');
				}
			});
		}
	});
}

//=== viewid:prodInfor_style_04_1566468078300 ===//
//--
				$(function(){
					var viewid="prodInfor_style_04_1566468078300";
					var sys_url="viewid=prodInfor_style_04_1566468078300&name=prodInfor&style=style_04&langid=0&pageid=2240981&viewCtrl=default&pid=0&isfb=1";
					var moreParams='';
					if(typeof(history.pushState) != 'undefined'){
						var hstate=JSON.stringify(history.state);
						if(hstate!='null'&& hstate!=null){
							eval('var hjson = ' + hstate);
							moreParams=hjson.moreParamsprodInfor_style_04_1566468078300;
						}
					}
					RequestURL(viewid,sys_url,moreParams);
				});
			//--

//=== viewid:prodInfor_style_04_1566468078300 ===//

        loadExtentFile('https://admin.mifwl.com/js/countdown.js?'+1698394734,'js');
    

//=== viewid:prodInfor_style_04_1566468078300 ===//

var PurchaseList_spec_list = 0;
var title_suffix = " - 优科生物";

//回调的时候重新加载关键字
var title = $('.prodName.titProSet:first').text();
if (!title) title = $('.titProSet:first').text();
title = (title.indexOf('-') == -1) ? title + title_suffix : title;
if (title != '产品标题') $("title").text(title);

var wid=66083;
var lang=0;
var remaining_inventory='剩余库存';

//loadExtentFile('http://admin.mifwl.com/js/spectools.js','js');
function addred(obj){
	if($(obj).attr("class")=='red'){
		$(obj).removeClass("red");
	}else{
		$(obj).addClass("red");
	}
}
function is_mobile(){
    return window.screen.width<767 || ($('body').width() > 0 && $('body').width() < 767);
}
function Pt_AddCart(Pt_ID){
	var s_PtCartUrl = "https://admin.mifwl.com//diyTools/?mod=ptCart&idweb=66083&Pt_ID="+Pt_ID+"&lang=";
	if(is_mobile()) window.location = s_PtCartUrl+"&ismobile=1";
	else{
		document.getElementById("boxName").innerHTML = "购物车";
		if(document.getElementById("boxClose"))document.getElementById("boxClose").innserHTML = "关闭";
		document.getElementById("showiframe").src = s_PtCartUrl+"&ismobile=0";
		box.Show({width:"900px",height:"500px"});
	}
}
if(typeof ModProdNum ==='undefined'){
	function ModProdNum(curHash,i_ActionType){
		i_ActionType = i_ActionType==2?2:1;
		var obj_ProdNum = $("#"+curHash+"_ProdNum");
		var obj_ProdNum1 = $("#prodInfor_style_04_1566468078300 .mobile_prodnum");
		var i_NewNum = obj_ProdNum.val();
		i_NewNum = parseInt(i_NewNum);
		if(i_ActionType==1){
			i_NewNum-= 1;
			if(i_NewNum<1)i_NewNum = 1;
		}else{
			i_NewNum+= 1;
		}
		obj_ProdNum.val(i_NewNum);
		obj_ProdNum1.val(i_NewNum);
		// CheckStock(curHash);
	}
}


function onAddcart() {
        addcart('0',66083,0,"admin.mifwl.com");
    }
    $(function () {
        if(is_mobile()){
            $('#prodInfor_style_04_1566468078300 .probuy_1 input:nth-child(2)').attr('onclick','').unbind('click').click(onAddcart);
        }
    });

	var dispatching = $("#prodInfor_style_04_1566468078300 .proInfoStyle01 .diy_farebox select").attr("value")
    var shopCartBaseUrl = "https://admin.mifwl.com/exusers/u_cart.php?idweb=66083&idpackage=0"+"&dispatching="+dispatching;
    if(typeof ProdDetailAddCart === 'undefined'){
        function ProdDetailAddCart(s_Hash,i_IDProduct,i_GoBuy,Allspec,view_ID){
        	if(typeof Allspec=="undefined") Allspec=0;
            var i_ProdNum = $(view_ID+" input[id $= 'ProdNum']").val();
           // alert(i_ProdNum);
            var pid = i_IDProduct;

			lang=0;
			if(lang == '0'){
				lang = Default_isFT;
				if(BodyIsFt == '0'){
					lang = BodyIsFt;
				}else if(BodyIsFt == '1'){
					lang = BodyIsFt;
				}
			}
            i_ProdNum = parseInt(i_ProdNum);
            if(!i_ProdNum || i_ProdNum<1) i_ProdNum = 1;

            i_GoBuy = parseInt(i_GoBuy);
            i_GoBuy = i_GoBuy==1?1:0;

            var i_IDSpecPrice = $(view_ID+" input[id ^= 'IDSpecPrice']").val();
            i_IDSpecPrice = parseInt(i_IDSpecPrice);
			if(i_IDSpecPrice==0){
				alert("请选择产品规格");
				return;
			}

            var shopCartUrl = shopCartBaseUrl;
            shopCartUrl+= "&lang="+lang;
            shopCartUrl+= "&act=add";
            shopCartUrl+= "&pid="+i_IDProduct;
            shopCartUrl+= "&num="+i_ProdNum;
            if(!isNaN(i_IDSpecPrice) && i_IDSpecPrice>0){
                shopCartUrl+= "&IDSpecPrice["+i_IDProduct+"]="+i_IDSpecPrice;
            }

            shopCartUrl+= "&GoBuy="+i_GoBuy;
            shopCartUrl+= "&ismobile="+(is_mobile()?1:0);

            var issafariBrowser = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);

           if(is_mobile() || issafariBrowser){
				var res = "0";
				var is_virtual = "";
				if(res == '1' && is_virtual == 0){ //不弹出购物车
					shopCartUrl+= "&use_ajax=1&callback=?";
					$.getJSON(shopCartUrl,function(ret){
						if(ret.i_AddFlag){
							$.alerts.dialogClass  = 'success';
							alert(ret.message);
						}
					});
				}else{
					window.location =  shopCartUrl;//有很多大客户需求的，不要随意开启这个或者关闭上面那个 2017/5/31
				}

           }else{



                document.getElementById("boxName").innerHTML="加入购物车";
                if(document.getElementById("boxClose")) document.getElementById("boxClose").innerHTML="×";
                document.getElementById("showiframe").src = shopCartUrl;
                box.Show({width:"880px",height:"500px"});
           }
        }
        function prodShowIntent(id,pid,lang){
			var boxName = "";
			var boxTitle = "";
			var boxbotton = "";
            var notMustUsername = "0";
            var notMustContact = "0";
            var notMustAbout = "0";
			if(typeof lang=='undefined') lang=0;
			if(lang == '0'){
				lang = Default_isFT
				if(BodyIsFt == '0'){
					lang = BodyIsFt;
				}else if(BodyIsFt == '1'){
					lang = BodyIsFt;
				}
			}
			var prodIntentUrl = 'https://admin.mifwl.com/product/proshowintent.php?id='+id+'&pid='+pid+'&lang='+lang+'&boxName='+boxName+'&boxTitle='+boxTitle+'&boxbotton='+boxbotton+'&notMustUsername='+notMustUsername+'&notMustContact='+notMustContact+'&notMustAbout='+notMustAbout+'&idweb=66083';
			if(is_mobile()){
				window.location =  prodIntentUrl+'&ismobile=1';
			}else{
				document.getElementById("boxName").innerHTML="产品意向单";
				if(document.getElementById("boxClose")) document.getElementById("boxClose").innerHTML="×";
				document.getElementById("showiframe").src = prodIntentUrl;
				box.Show({width:"450px",height:"350px"});
			}
        }

        function checkExuser(cb) {
            $.ajax({
                type : "GET",
                dataType : 'jsonp',
                jsonp:"jsoncallback",
                url : "https://admin.mifwl.com/exusers/ajax/check_exuser.php?idweb=66083",
                data : '',
                success:function(data){
                    if (data.code == 200) {
                        if (typeof cb  == 'function') {
                            cb(data['data']);
                        }
                    }else{
                        alert("请先登录");
                    }
                },
                error:function(){
                    console.log('error');
                }
            });
        }


    }

    if(typeof Pt_AddCart !== 'function'){
        function Pt_AddCart(Pt_ID){
            var s_PtCartUrl = "https://admin.mifwl.com//diyTools/?mod=ptCart&idweb=66083&Pt_ID="+Pt_ID+"{shareOrd}&lang=0";
            if(is_mobile()){
            window.location = s_PtCartUrl+"ismobile=1";
            }else{
            document.getElementById("boxName").innerHTML = "加入购物车";
            if(document.getElementById("boxClose"))document.getElementById("boxClose").innserHTML = "×";
            document.getElementById("showiframe").src = s_PtCartUrl;
            box.Show({width:"900px",height:"500px"});
            }
        }
    }

    if(typeof Group_AddCart !== 'function'){
        function Group_AddCart(i_IDProduct,i_IDPackage,isTrade,i_GoBuy,view_ID){
			lang=0;
			if(lang == '0'){
				lang = Default_isFT
				if(BodyIsFt == '0'){
					lang = BodyIsFt;
				}else if(BodyIsFt == '1'){
					lang = BodyIsFt;
				}
			}
			var dispatching = $(view_ID+" .proInfoStyle01 .diy_farebox select").attr("value")
            var i_ProdNum = $(view_ID+" input[id $= 'ProdNum']").val();
            i_ProdNum = parseInt(i_ProdNum);
            var isTrade = parseInt(isTrade);
            isTrade = (isNaN(isTrade) || isTrade<1) ? 0:isTrade;
			i_GoBuy = parseInt(i_GoBuy);
		    i_GoBuy = i_GoBuy==1?1:0;

            var s_ShopCartUrl = "https://admin.mifwl.com/exusers/u_cart.php?idweb=66083&pid="+i_IDProduct+"&num="+i_ProdNum+"&idpackage="+i_IDPackage+"&act=add&lang="+lang+"&dispatching="+dispatching;

			var i_IDSpecPrice = $(view_ID+" input[id ^= 'IDSpecPrice']").val();
            i_IDSpecPrice = parseInt(i_IDSpecPrice);
			if(i_IDSpecPrice==0){
				alert("请选择产品规格");
				return;
			}
            if(!isNaN(i_IDSpecPrice) && i_IDSpecPrice>0){
                s_ShopCartUrl+= "&IDSpecPrice["+i_IDProduct+"]="+i_IDSpecPrice;
            }
            s_ShopCartUrl+= "&GoBuy="+i_GoBuy;
           // console.log(s_ShopCartUrl);

            //兼容苹果浏览器safaricookie,session问题
            var issafariBrowser = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);

           if(is_mobile() || issafariBrowser){
				window.location = s_ShopCartUrl+"&ismobile=1"+"&dispatching="+dispatching;
            }else{
				document.getElementById("boxName").innerHTML = "立即购买";
				if(document.getElementById("boxClose"))document.getElementById("boxClose").innserHTML = "×";
				if(isTrade==0){
					document.getElementById("showiframe").src = s_ShopCartUrl+"&dispatching="+dispatching;
					box.Show({width:"900px",height:"500px"});
				}else{
					document.getElementById("showiframe").src = "https://admin.mifwl.com/product/iframe_product.php?pid="+i_IDProduct+"&wid=66083&lang="+lang+"&idpackage="+i_IDPackage+"&dispatching="+dispatching;
					box.Show({width:"800px",height:"420px"});
				}
            }
        }
    }

	if(typeof addcart !== 'function'){
		function addcart(pid,idweb,lang,jsbbxserver){
			var dispatching = $("#prodInfor_style_04_1566468078300 .proInfoStyle01 .diy_farebox select").attr("value")
			var i_ProdNum = $("#ce505584d35dbcfc900c74d3998ae71e_ProdNum").val();
			if(is_mobile()){
				var locationUrl = "https://"+jsbbxserver+"/exusers/u_cart.php?idweb="+idweb+"&lang="+lang+"&pid="+pid+"&act=add&ismobile=1&num="+i_ProdNum+"&dispatching="+dispatching ;
				window.location = locationUrl;
			}else{
				document.getElementById("boxName").innerHTML="加入购物车";
				if(document.getElementById("boxClose")) document.getElementById("boxClose").innerHTML="×";
				document.getElementById("showiframe").src="https://"+jsbbxserver+"/exusers/u_cart.php?idweb="+idweb+"&pid="+pid+"&act=add&lang="+lang+"&ispc=1"+"&dispatching="+dispatching;
				box.Show({width:"920px",height:"500px"});
			}
		}
	}

	function getThisId(lang,Default_isFT) {
        if(typeof lang=='undefined') lang=0;
        if(lang == '0'){
            lang = Default_isFT
            if(BodyIsFt == '0'){
                lang = BodyIsFt;
            }else if(BodyIsFt == '1'){
                lang = BodyIsFt;
            }
        }
        return lang;
    }

if(typeof InteScore_AddCart !== 'function'){
	function InteScore_AddCart(url){
        lang = getThisId(lang,Default_isFT);
		var s_InteScoreUrl = "https://admin.mifwl.com/"+url+"";
		if(is_mobile()){
			window.location = s_InteScoreUrl+"&ismobile=1&lang=" + lang;
		}else{
			document.getElementById("boxName").innerHTML = "积分兑换";
			if(document.getElementById("boxClose"))document.getElementById("boxClose").innserHTML = "×";
			document.getElementById("showiframe").src = s_InteScoreUrl + "&lang=" + lang;
			box.Show({width:"900px",height:"500px"});
		}
	}
}





function BuyPurchase(gid,head_lid) {
    if (!head_lid) head_lid = 0;
	var i_IDSpecPrice = $("#IDSpecPrice_ce505584d35dbcfc900c74d3998ae71e").val();
	if(i_IDSpecPrice == 0){
		alert('请选择规格！');
		return;
	}
	var i_ProdNum = $("#ce505584d35dbcfc900c74d3998ae71e_ProdNum").val();
	i_ProdNum = parseInt(i_ProdNum);
	var url = "gid="+gid+"&head_lid="+head_lid+"&spec_id="+i_IDSpecPrice+"&buy_num="+i_ProdNum;
	if(is_mobile()){
		window.location.href="https://admin.mifwl.com/exusers/purchase_checkout.php?isCenter=1&"+url;
	}else{
		document.getElementById("boxName").innerHTML="我要开团 - 拼购活动";
		if(document.getElementById("boxClose")) document.getElementById("boxClose").innerHTML="×";
		document.getElementById("showiframe").src="https://admin.mifwl.com/exusers/purchase_checkout.php?isCenter=1&"+url;
		box.Show({width:"920px",height:"500px"});
	}
}


//=== viewid:productList_style_04_1498112543032 ===//
//--
				$(function(){
					var viewid="productList_style_04_1498112543032";
					var sys_url="viewid=productList_style_04_1498112543032&name=productList&style=style_04&langid=0&pageid=2240981&viewCtrl=default&isfb=1";
					var moreParams='';
					if(typeof(history.pushState) != 'undefined'){
						var hstate=JSON.stringify(history.state);
						if(hstate!='null'&& hstate!=null){
							eval('var hjson = ' + hstate);
							moreParams=hjson.moreParamsproductList_style_04_1498112543032;
						}
					}
					RequestURL(viewid,sys_url,moreParams);
				});
			//--

//=== viewid:productList_style_04_1498112543032 ===//

if(typeof addcart !== 'function'){
	function addcart(pid,is_virtual,idspecprice,idpackage){
        var lang=0;
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
			document.getElementById("boxName").innerHTML="加入购物车";
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
	$('#productList_style_04_1498112543032 .prod_infos .end_time').each(function(){
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


//=== viewid:customDetail_style_prodDetail_02_1482461270622 ===//
//--
				$(function(){
					var viewid="customDetail_style_prodDetail_02_1482461270622";
					var sys_url="viewid=customDetail_style_prodDetail_02_1482461270622&name=customDetail&style=style_prodDetail_02&langid=0&pageid=2240981&viewCtrl=prodDetail&isfb=1";
					var moreParams='';
					if(typeof(history.pushState) != 'undefined'){
						var hstate=JSON.stringify(history.state);
						if(hstate!='null'&& hstate!=null){
							eval('var hjson = ' + hstate);
							moreParams=hjson.moreParamscustomDetail_style_prodDetail_02_1482461270622;
						}
					}
					RequestURL(viewid,sys_url,moreParams);
				});
			//--

//=== viewid:customDetail_style_prodDetail_02_1482461270622 ===//

    $('#customDetail_style_prodDetail_02_1482461270622 .proListShow .listLi').addClass("modSet");
    detailHeightAuto("customDetail_style_prodDetail_02_1482461270622", "详情加载中");
    setTimeout(function(){
        $("#customDetail_style_prodDetail_02_1482461270622 .proListShow .listUl").css("display","flex");
    },800);


//=== viewid:customDetail_style_prodDetail_02_1482461270622 ===//

loadExtentFile('http://admin.mifwl.com/js/jquery.tabs.js','js');
loadExtentFile('http://admin.mifwl.com/js/jquery.commentImg.js','js');
var ajaxServer = 'http://admin.mifwl.com';
var upPicServer = 'http://img.nicebox.cn';
var curIDWebSite = 66083;


//=== viewid:customDetail_style_prodDetail_02_1482461270622 ===//

	$(function () {
		if(isMobile()){
			$(".mobileAbout").css("display","block");
			$(".pcAbout").remove();
		}else{
			$(".mobileAbout").remove();
			$(".pcAbout").css("display","block");
		}
		function isMobile(){
			return window.screen.width<767 || ($('body').width() > 0 && $('body').width() < 767);
		}
	});



//=== viewid:customDetail_style_prodDetail_02_1482461270622 ===//


$(function(){
    let modelObj = $('#customDetail_style_prodDetail_02_1482461270622');
    tabclass("#proDetailTabUl", "li", "#proDetailContent", "[name='prodDetail_2']");
    findObj('#proDetailTabUl li:first-child').addClass('act');
    findObj('#proDetailContent li:first-child').removeClass('hide');
    let eventsName = findObj("#proDetailTabUl li:first-child").attr('events');
    ajax_load(eventsName);
    
    function ajax_load(eventsName){
        let CurHash=findObj("#proDetailTabUl").attr('curhash');
        let Pid=findObj("#proDetailTabUl").attr('pid');
        let types=findObj("#proDetailTabUl").attr('types');
        //累计评论
        if(eventsName=='ajax_load_comments_list'){
            ajax_load_comments_list(CurHash,Pid,types,'customDetail_style_prodDetail_02_1482461270622');
            //成交记录
        }else if(eventsName =='ajax_load_exchange_list'){
            ajax_load_exchange_list(CurHash,Pid,1,'customDetail_style_prodDetail_02_1482461270622');
        }
    }
    
    function findObj(dom){
        return modelObj.find(dom);
    }
    
    function tabclass(tab_t, tab_t_tag, tab_c, tag_c_tag) {
        // let tab_t = findObj(tab_t);
        let tab_t_li_obj = findObj(tab_t_tag);
        // let tab_c = findObj(tab_c);
        let tab_c_li_obj = findObj(tag_c_tag);
        tab_t_li_obj.addClass('tabItemSet');
        tab_t_li_obj.eq(0).addClass('act tabCurItem');
        tab_c_li_obj.not(':first').addClass('hide');
        var len = tab_t_li_obj.length;
        for (let i = 0; i < len; i++) {
            let tab_t_li = tab_t_li_obj.eq(i);
            let tab_c_li = tab_c_li_obj.eq(i);
            let eventsName = tab_t_li.attr("events");
            ajax_load(eventsName);
            diyAutoHeight(modelObj);
            tab_t_li.attr('index',i);
            tab_t_li.click(function(){
                tab_t_li.addClass('act tabCurItem').siblings().removeClass('act tabCurItem');
                tab_c_li.removeClass('hide').siblings().addClass('hide');
                diyAutoHeight(modelObj);
                basedLang();
            });
        }
    }
    // 不知道是用来干嘛的？？！！
    function basedLang(){
        let based_Obj= document.getElementById("based");
        let currentlang_Obj= document.getElementById("currentlang");//当前语言
        if (based_Obj){
            let JF_cn="ft"+self.location.hostname.toString().replace(/\./g,"");
            let isNeedDisFt2Jt = 0;
            switch( Request('chlang') ){
                case "cn-tw":
                    BodyIsFt= getCookie(JF_cn)=="1"? 0 : 1;
                    isNeedDisFt2Jt = 1;
                    delCookie(JF_cn);
                    SetCookie(JF_cn, BodyIsFt, 7);
                    break;
                case "cn":
                case "en":
                    BodyIsFt= 0;
                    isNeedDisFt2Jt = 1;
                    delCookie(JF_cn);
                    SetCookie(JF_cn, 0, 7);
                    currentlang_Obj.innerHTML = "简体中文";
                    break;
                case "tw":
                    BodyIsFt= 1;
                    delCookie(JF_cn);
                    SetCookie(JF_cn, 1, 7);
                    currentlang_Obj.innerHTML = "繁體中文"; //因为是繁体 你写简体也会被转化成繁体  所以这儿只能写繁体 2015-1-16
                    break;
                default:
                    if (typeof Default_isFT!='undefined' && Default_isFT){ //如果默认繁体
                        if(getCookie(JF_cn)==null){
                            isNeedDisFt2Jt = 1;
                            BodyIsFt= 1;
                            SetCookie(JF_cn, 1, 7);
                            break;
                        }
                    }
                    BodyIsFt= parseInt(getCookie(JF_cn));
            }
            if(BodyIsFt===1){
                StranBody();
                document.title = StranText(document.title);
            } else if (isNeedDisFt2Jt == 1) {
                StranBodyce();
                document.title = StranTextce(document.title);
            }
        }else{
            let JF_cn="ft"+self.location.hostname.toString().replace(/\./g,"");
            if(Default_isFT){
                BodyIsFt= 1;
                delCookie(JF_cn);
                SetCookie(JF_cn, 1, 7);
                StranBody();
                document.title = StranText(document.title);
            }else{
                BodyIsFt= 0;
                delCookie(JF_cn);
                SetCookie(JF_cn, 0, 7);
                StranBodyce();
                document.title = StranTextce(document.title);
            }
        }
    }
});


//=== viewid:customDetail_style_prodDetail_02_1482461270622 ===//

    if(typeof is_mobile ==='undefined'){
        function is_mobile(){
            return window.screen.width<767 || ($('body').width() > 0 && $('body').width() < 767);
        }
    }
    function joinPurchaseTeam(head_lid=0) {
        if(is_mobile()){
            window.location.href="https://admin.mifwl.com/exusers/purchase_orderdetail.php?isCenter=1&lid="+head_lid;
        }else{
            document.getElementById("boxName").innerHTML="我要参团 - 拼购活动";
            if(document.getElementById("boxClose")) document.getElementById("boxClose").innerHTML="×";
            document.getElementById("showiframe").src="https://admin.mifwl.com/exusers/purchase_orderdetail.php?isCenter=1&lid="+head_lid;
            box.Show({width:"920px",height:"500px"});
        }
    }

    

//=== viewid:dh_style_03_1566453251567 ===//

/*pc,手机显示隐藏*/
function is_mobile(){
	return window.screen.width<767 || ($('body').width() > 0 && $('body').width() < 767);
}
$(function(){
	$("#dh_style_03_1566453251567 li").each(function(){
		  });
})