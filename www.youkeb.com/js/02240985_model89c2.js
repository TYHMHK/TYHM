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

//=== viewid:banner_style_01_1566376099506 ===//

$(document).ready(function(){
	arrowShow();
	$(window).resize(function(){
		arrowShow();
	});
	// 箭头显示
	function arrowShow(){
		if(window.screen.width<767 || ($('body').width() > 0 && $('body').width() < 767) || navigator.userAgent.indexOf('Mac OS X') != -1){
			$("#banner_style_01_1566376099506 .bannerStyle_1 .awesome-font").show().siblings().hide();
		}else{
			$("#banner_style_01_1566376099506 .bannerStyle_1 .awesome-font").hide().siblings().show();
		}
	}
	
});


//=== viewid:banner_style_01_1566376099506 ===//


    /*
     * Banner 轮播图类
     */
	var intervaltimer;
    function Banner(config) {
        this._default = {
            'list':[],
            'length':0,
            'current':0,
            'timer':undefined,      // 计时器
            'view':undefined,           // 视图
            'flick':undefined,      // 圆点选择器
            'duration':3,               // 切换时间间隔
            'animation':0.5         // 动画时间
        };
        config = $.extend(true, this._default, config);
        this.config = config;
        this.init(config);
    }
    Banner.prototype.init = function(config) {
        this.animateStyle = 'normal';       // 动画效果 ( 根据动画效果, 不同的方法有不同的实现 )
        this.direction = 'right';   // 当前滚动方向
        this.view = this.config.view;
        this.config.length = this.config.list.length;
        this.config.flick = this.view ? this.view.find(".bannerStyle_1 .flicking_con > a") : undefined;
    };
    // 计算下一个要显示的图片的索引
    // by: 如果没有传入参数, 则使用配置中的数据this.config.current, 否则使用传入的参数
    Banner.prototype.nextIndex = function(by) {
        by === undefined && (by = this.config.current);
        var next = this.direction == 'right' ? by + 1 : by - 1;
        next >= this.config.length && (next = 0);
        next < 0 && (next = this.config.length - 1);
        return next;
    };
    //图片链接
    $url_html = new Array();
    $i = 0;
    $url_len = 2;
            $url_html[0] = "";
            $url_html[1] = "";
     

    $('#banner_style_01_1566376099506 a.img_url').attr('href',$url_html[$i]);
    // 跳到指定图片
    Banner.prototype.animateIndex = function(index) {
        this.endAnimate();
        if(index >= 0 && index < this.config.length && this.config.current != index) {
            if(this.config.current < index) {
                this.direction = 'right';
                this.config.current = index - 1;
            } else {
                this.direction = 'left';
                this.config.current = index + 1;
            }
            
            this.showIndex(this.config.current);
            this.startAnimate();
        }
    };
    // 向右动画
    Banner.prototype.startAnimateRight = function() {
        this.direction = 'right';
        this.startAnimate();
    };
    // 向左动画
    Banner.prototype.startAnimateLeft = function() {
        this.direction = 'left';
        this.startAnimate();
    };
    // 结束动画
    Banner.prototype.endAnimate = function() {
			clearTimeout(this.config.timer);
    };
	// 结束动画
	Banner.prototype.hoverEndAnimate = function() {
			var that = this;
			intervaltimer = setInterval(function(){
				clearTimeout(that.config.timer);
			},100);
	};
    Banner.prototype.startAnimate = function() {
        switch(this.animateStyle) {
            case 'normal':
                // 默认效果
                this.endAnimate();
                if(this.config.length > 1) {
                    var prev = this.config.current, next = this.nextIndex(),
                            end = this.direction == 'right' ? {prev:"-100%", current:"100%"} : {prev:"100%", current:"-100%"};  // 前一个图片和当前图片的最后停留位置
                    this.config.flick.eq(next).addClass("on").siblings().removeClass("on");
                    // 执行动画
                    var banner = this;
                    this.imgs.eq(prev).stop().animate({"left":end.prev}, this.config.animation, function(){
                        banner.config.timer = setTimeout(function(){
                            banner.startAnimate();
                        },banner.config.duration);
                    });
                    this.imgs.eq(next).css({"left":end.current}).stop().animate({"left":"0%"}, this.config.animation);
                    this.config.current = next;
                }
                break;

            case 'rotate-3d':
                // 3D旋转效果
                this.endAnimate();
                this.updateBgImg();
                if(this.config.length > 1) {
                    var prev = this.config.current, next = this.nextIndex();
                    this.config.flick.eq(next).addClass("on").siblings().removeClass("on");
                    this.config.current = next;
                    this.parts.css("transform", "rotateX(" + ((this.direction == 'right' ? ++this.rotate : --this.rotate) * 90) + "deg)");
                    var banner = this;
                    this.config.timer = setTimeout(function(){
                        banner.startAnimate();
                    },banner.config.duration);
                }
                $('#banner_style_01_1566376099506 a.img_url').attr('href',$url_html[this.config.current]);
                break;
        }
    };
    // 指定显示的图片
    Banner.prototype.showIndex = function(index) {
        switch(this.animateStyle) {
            case 'normal':
                // 默认效果
                this.imgs.eq(index).css("left","0%").siblings(".img-item").css("left","100%");
                this.config.flick.eq(index).addClass("on").siblings().removeClass("on");
                break;
            case 'rotate-3d':
                // 3D旋转效果
                this.updateFaceBottonTopImg(index);
                this.config.flick.eq(index).addClass("on").siblings().removeClass("on");
                break;
        }
    };

    /*
     * ********************************************
     * 3D旋转效果 特有函数 begin
     */
    // 每次旋转前都需要更新背部的图片
    Banner.prototype.updateBgImg = function() {
        // 计算背部要显示的图片
        var bg_image_index = this.nextIndex(this.nextIndex());
        // index: 计算背景图片当前显示在哪个img中( 总共有4个图片, 分别位于正面/底部/背部/顶部, 索引分别为0, 1, 2, 3 )
        var c, index = (c = (this.rotate + 2) % 4) >= 0 ? c : c + 4;
        var banner = this;
        // console.log('第',index,'个面-使用更新为第',bg_image_index,'张图');
        this.parts && this.parts.each(function () {
            $(this).find('.img:eq('+index+')').css({'background-image': 'url("'+banner.config.list[bg_image_index]+'")'});

        });
    };
    // 更新正面/顶部/底部的图片
    // index: 要显示哪张图片
    // 备注: 因为总共有四个面的图片需要更新, 初始化时, 正面/顶部/底部的图片只需更新一次即可 (背部的图片在每次旋转前都需要更新)
    Banner.prototype.updateFaceBottonTopImg = function(index) {
        // face, bottom, top: 计算正面/顶部/底部图片当前显示在哪个img中( 总共有4个图片, 分别位于正面/底部/背部/顶部, 索引分别为0, 1, 2, 3 )
        var c, face = (c = this.rotate % 4) >= 0 ? c : c + 4, bottom, top;
        bottom = face + 1; bottom >= this.config.length && (bottom = 0);
        top = face - 1; top < 0 && (top = this.config.length - 1);
        var banner = this;
        this.parts && this.parts.each(function () {
            // console.log('第',face,'个面-使用更新为第',index,'张图');
            $(this).find('.img:eq('+face+')').css({'background-image': 'url("'+banner.config.list[index]+'")'});
            // console.log('第',bottom,'个面-使用更新为第',index < banner.config.length - 1 ? index + 1 : 0,'张图');
            $(this).find('.img:eq('+bottom+')').css({'background-image': 'url("'+banner.config.list[index < banner.config.length - 1 ? index + 1 : 0]+'")'});
            // console.log('第',top,'个面-使用更新为第',index > 0 ? index - 1 : banner.config.length - 1,'张图');
            $(this).find('.img:eq('+top+')').css({'background-image': 'url("'+banner.config.list[index > 0 ? index - 1 : banner.config.length - 1]+'")'});
        });
    };
    // 初始化旋转部分: 设置3d旋转的四个面的图片, index表示默认显示哪张图片
    Banner.prototype.initImgPart = function(index) {
        var banner = this;
        this.parts && this.parts.each(function () {
            $(this).find('.img').each(function (i) {
                var j = 0;
                switch (i) {
                    case 0: j = index; break;   // 正面
                    case 1: j = index + 1; break;   // 底部
                    case 2: break;  // 背部
                    case 3: j = index - 1; break;   // 顶部
                }
                j >= banner.config.length && (j = 0);
                j < 0 && (j = banner.config.length - 1);
                $(this).css({'background-image': 'url("'+banner.config.list[j]+'")', 'background-repeat':'no-repeat', 'background-color':'#fff'});
            });
        });
    };
    // 更新旋转部分: 之所以使用定时器, 是因为无法实时获取模块宽度
    Banner.prototype.updateImgPart = function() {
        this.parts && this.parts.each(function(index) {
            $(this).css({
                "left":$(this).width() * index + "px"
            });
            $(this).find(".img").css({
                "background-position": -$(this).width() * index + "px"
            });
        });
        var banner = this;
        setTimeout(function () {
            banner.updateImgPart();
        }, 800);
    };
    /*
     * 3D旋转效果 特有函数 end
     * ********************************************
     */

    // 图片数据
    var list_banner_style_01_1566376099506 = [];
    list_banner_style_01_1566376099506.push('/userimg/66083/pkgimg/banner/banner2.jpg');list_banner_style_01_1566376099506.push('/userimg/66083/pkgimg/banner/banner3.jpg');
    var banner_banner_style_01_1566376099506;        // 轮播图对象
    $(function(){
        // 创建轮播图
        $arrHref = new Array();
        banner_banner_style_01_1566376099506 = new Banner({
            'list':list_banner_style_01_1566376099506,
            'view':$('#banner_style_01_1566376099506'),
            'duration':parseFloat('3') * 1000,
            'animation':parseFloat('0.5') * 1000
        });
                banner_banner_style_01_1566376099506.animateStyle = 'normal';
        banner_banner_style_01_1566376099506.imgs = banner_banner_style_01_1566376099506.view.find(".bannerStyle_1 .main_image .img-list").children(".img-item");
        banner_banner_style_01_1566376099506.view.find('a').each(function (i) {
            $(this).click(function () {
                if(!$(this).attr('href')) {
                    return false;
                }
            });
           
        });
        banner_banner_style_01_1566376099506.view.find('a.picSet').each(function(i){
             $arrHref[i] = $(this).attr('href');
        });
                
        // 显示指定索引的图片
        banner_banner_style_01_1566376099506.showIndex(banner_banner_style_01_1566376099506.config.current);


        // 监听 点击圆点
        banner_banner_style_01_1566376099506.config.flick.click(function(){
            banner_banner_style_01_1566376099506.animateIndex($(this).index());
            $('#banner_style_01_1566376099506 a.img_url').attr('href',$url_html[$(this).index()]);
            $i = $(this).index();
            return false;
        });

        // 监听 鼠标悬浮时
        banner_banner_style_01_1566376099506.view.hover(
                function(){
                    banner_banner_style_01_1566376099506.hoverEndAnimate();
                    banner_banner_style_01_1566376099506.view.find(".bannerStyle_1 .btn_prev, .bannerStyle_1 .btn_next").fadeIn();
                },
                function(){
						clearInterval(intervaltimer);
                    banner_banner_style_01_1566376099506.config.timer = setTimeout(function(){
                        banner_banner_style_01_1566376099506.startAnimateRight();
                    },banner_banner_style_01_1566376099506.config.duration);
                    banner_banner_style_01_1566376099506.view.find(".bannerStyle_1 .btn_prev, .bannerStyle_1 .btn_next").fadeOut()
                }
        );
	  

        // 监听 点击左右按钮
        banner_banner_style_01_1566376099506.view.find(".btn_prev").click(function() {
            banner_banner_style_01_1566376099506.startAnimateLeft();
        });
        banner_banner_style_01_1566376099506.view.find(".btn_next").click(function() {
            banner_banner_style_01_1566376099506.startAnimateRight();
        });

        // 监听 触摸事件
        var touchVal = null;
        document.addEventListener("touchstart", function(e){
            if($(e.target).is(banner_banner_style_01_1566376099506.view) || $(e.target).closest("#"+banner_banner_style_01_1566376099506.view.attr("id")).length > 0) {
                touchVal = {};
                touchVal.downX = e.touches[0].clientX;  // 记录触摸起始位置
            }
        }, false);
        document.addEventListener("touchmove", function(e){
            if(touchVal && touchVal.downX) {
                touchVal.moveX = e.touches[0].clientX - touchVal.downX;     // 计算触摸中的偏移位置
            }
        }, false);
        document.addEventListener("touchend", function(e){
            if(touchVal && touchVal.moveX){
                if(touchVal.moveX > 30){
                    banner_banner_style_01_1566376099506.startAnimateLeft();             // 触摸生效
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnvalue = false;
                    }
                }else if(touchVal.moveX < -30){
                    banner_banner_style_01_1566376099506.startAnimateRight();                // 触摸生效
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnvalue = false;
                    }
                }
            }
            touchVal = null;
        }, false);

       
        // 运行
        banner_banner_style_01_1566376099506.config.timer = setTimeout(function(){
            banner_banner_style_01_1566376099506.startAnimateRight();
        }, banner_banner_style_01_1566376099506.config.duration);
    });


//=== viewid:productList_style_22_1566444060303 ===//
//--
				$(function(){
					var viewid="productList_style_22_1566444060303";
					var sys_url="viewid=productList_style_22_1566444060303&name=productList&style=style_22&langid=2&pageid=2240985&viewCtrl=default&isfb=1";
					var moreParams='';
					if(typeof(history.pushState) != 'undefined'){
						var hstate=JSON.stringify(history.state);
						if(hstate!='null'&& hstate!=null){
							eval('var hjson = ' + hstate);
							moreParams=hjson.moreParamsproductList_style_22_1566444060303;
						}
					}
					RequestURL(viewid,sys_url,moreParams);
				});
			//--

//=== viewid:productList_style_22_1566444060303 ===//

    $("#productList_style_22_1566444060303 .prod_default22 .prod_info").click(function(){
        let href = $(this).parents('.prod_Item').find('.prodImg_box .prod_img a').attr('href');
         window.location.href = href;     });
var showSub = '0';



//=== viewid:productList_style_22_1566444060303,productList_style_36_1664269008748,productList_style_05_1498112766363,productList_style_04_1498112543032 ===//

    

//=== viewid:productList_style_22_1566444060303 ===//

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
	$('#productList_style_22_1566444060303 .prod_infos .end_time').each(function(){
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


//=== viewid:newsList_style_04_1566445577965 ===//
//--
				$(function(){
					var viewid="newsList_style_04_1566445577965";
					var sys_url="viewid=newsList_style_04_1566445577965&name=newsList&style=style_04&langid=2&pageid=2240985&viewCtrl=newsList&isfb=1";
					var moreParams='';
					if(typeof(history.pushState) != 'undefined'){
						var hstate=JSON.stringify(history.state);
						if(hstate!='null'&& hstate!=null){
							eval('var hjson = ' + hstate);
							moreParams=hjson.moreParamsnewsList_style_04_1566445577965;
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