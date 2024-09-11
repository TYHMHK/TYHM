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

//=== viewid:productList_style_36_1664269008748 ===//
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
		if(!sys_item['sys_attrprice'][s_Hash][_val]){
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
			$('.snum').html('剩余库存'+diffNum+'件');
			
			if(diffNum > 0){
				$('.havnum').show();
				$('.nonum').hide();
			}else{
				$('.havnum').hide();
				$('.nonum').show();
			}
			CheckStock(s_Hash);
		}
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
	var oldPriceObj = $("#"+sys_item['price_id'][s_Hash]['HTMLPriceOldID']);
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
		if(curResult['PackagePrice']){
			if(is_int==1){
				var PackagePrice = curResult['PackagePrice'];
				if(typeof(PackagePrice)=='string') curResult['PackagePrice'] = PackagePrice.replace(/,/g, "");
				
				curResult['PackagePrice'] = parseFloat(curResult['PackagePrice']);
				curResult['PackagePrice'] = Math.round(curResult['PackagePrice']);//是否取整
			}
			packagePriceObj.text(curResult['PackagePrice']);
			$(".packageTips").css("display","block");
		}else{
			packagePriceObj.text("无");
			$(".packageTips").css("display","none");
		}
	}

	var memberPriceObj = $("#"+sys_item['price_id'][s_Hash]['HTMLPriceMID']);
	if(memberPriceObj && curResult && curResult["mprice"]){
		if(curResult['mprice']){
			if(is_int==1){
				var mprice = curResult['mprice'];
				if(typeof(mprice)=='string') curResult['mprice'] = mprice.replace(/,/g, "");
				curResult['mprice'] = parseFloat(curResult['mprice']);
				curResult['mprice'] = Math.round(curResult['mprice']);//是否取整
			} 
			curResult['mprice'] = price_format(curResult['mprice']);

			memberPriceObj.text(curResult['mprice']);
		}else{
			memberPriceObj.text("无");
		}
	}

	//上面那个mprice有什么用的，俊杰看看，我先重写一个让多规格能够正常使用先 by zhaobin

	var PriceObj = $("#"+sys_item['price_id'][s_Hash]['HTMLPricePID']);
	if(PriceObj && curResult && curResult["price"] && !curResult['PackagePrice']){
		if(curResult['price']){
			if(is_int==1) {
				var price = curResult['price'];
				if(typeof(price)=='string') curResult['price'] = price.replace(/,/g, "");

				curResult['price'] = parseFloat(curResult['price']);
				curResult['price'] = Math.round(curResult['price']);//是否取整
			}

			curResult['price'] = price_format(curResult['price']);
			
			PriceObj.text(curResult['price']);
		}else{
			PriceObj.text("无");
		}
	}
}

function CheckStock(s_Hash){
	var prodnumObj = $("#"+s_Hash+"_ProdNum");
	var curNum = parseInt(prodnumObj.val());
	var maxNum = parseInt(prodnumObj.data('maxnum'));
	if(!curNum || curNum<1)curNum = 1;
	if(maxNum<curNum){
		$("#"+s_Hash+"_ErrMsg").html("剩余库存:"+maxNum);
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

//=== viewid:productList_style_36_1664269008748 ===//
//--
				$(function(){
					var viewid="productList_style_36_1664269008748";
					var sys_url="viewid=productList_style_36_1664269008748&name=productList&style=style_36&langid=0&pageid=2240973&viewCtrl=default&this_group_id=949371&m_token=f4&isfb=1";
					var moreParams='';
					if(typeof(history.pushState) != 'undefined'){
						var hstate=JSON.stringify(history.state);
						if(hstate!='null'&& hstate!=null){
							eval('var hjson = ' + hstate);
							moreParams=hjson.moreParamsproductList_style_36_1664269008748;
						}
					}
					RequestURL(viewid,sys_url,moreParams);
				});
			//--

//=== viewid:productList_style_36_1664269008748 ===//

var showSub = '0';
		
		$('#productList_style_36_1664269008748 .prod_li_kind').each(function(){
			$(this).click(function(){
                window.history.pushState({},0,"#productList_style_36_1664269008748"); 				var gid = $(this).attr('data-gid');
				var gsubid = $(this).attr('data-gsubid');
								RequestURL('productList_style_36_1664269008748','viewid=productList_style_36_1664269008748&name=productList&style=style_36&langid=0&pageid=2240973&viewCtrl=default&this_group_id=949371&m_token=f4'+'&postPgid='+gid+'&postPgsubid=0&postPgthrid=0&showSub='+showSub);
			});
		});
		$('#productList_style_36_1664269008748 .prod_subli_kind').each(function(){
			$(this).click(function(){
                window.history.pushState({},0,"#productList_style_36_1664269008748");
				var gid = $(this).attr('data-gid');
					var gsubid = $(this).attr('data-gsubid');
										RequestURL('productList_style_36_1664269008748','viewid=productList_style_36_1664269008748&name=productList&style=style_36&langid=0&pageid=2240973&viewCtrl=default&this_group_id=949371&m_token=f4'+'&postPgid='+gid+'&postPgsubid='+gsubid+'&postPgthrid=0&showSub='+showSub);
			});
		});
		$('#productList_style_36_1664269008748 .prod_thrli_kind').each(function(){
			$(this).click(function(){
                window.history.pushState({},0,"#productList_style_36_1664269008748");
				var gid = $(this).attr('data-gid');
				var gsubid = $(this).attr('data-gsubid');
				var gthrid = $(this).attr('data-gthrid');
										RequestURL('productList_style_36_1664269008748','viewid=productList_style_36_1664269008748&name=productList&style=style_36&langid=0&pageid=2240973&viewCtrl=default&this_group_id=949371&m_token=f4'+'&postPgid='+gid+'&postPgsubid='+gsubid+'&postPgthrid='+gthrid+'&showSub='+showSub);
			});
		});




//=== viewid:productList_style_22_1566444060303,productList_style_36_1664269008748 ===//

    

//=== viewid:productList_style_36_1664269008748 ===//

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
	$('#productList_style_36_1664269008748 .prod_infos .end_time').each(function(){
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


//=== viewid:dh_style_03_1566453251567 ===//

/*pc,手机显示隐藏*/
function is_mobile(){
	return window.screen.width<767 || ($('body').width() > 0 && $('body').width() < 767);
}
$(function(){
	$("#dh_style_03_1566453251567 li").each(function(){
		  });
})