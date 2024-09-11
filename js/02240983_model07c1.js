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

//=== viewid:newsDetail_style_01_1506318095542 ===//
// var content_div = '';
// var show_div = '';
// var flag="";
// var lang="";
// var show_style="";
// var page_length = "";
var content_length = 0;
var page_num = 1;
var start_flag = 0;
var end_flag = 0;
var content_arr = '';
// var total_lenth = 0;
// var page_count = 0;
function getPage(hideNewsContent) {
    if(flag == 2){
        var content = $(hideNewsContent).html();
        content_arr = content.split(/<hr[^>]*>/);
        page_count = content_arr.length;
    }
    else{
        total_lenth = $(hideNewsContent).text().trim().length;
        page_count = Math.ceil(total_lenth / page_length);
        content_arr  = $(hideNewsContent).html();
    }
    $(hideNewsContent).empty();
}

function goto(page,newsText,view_id,obj='', showAllText = '') {

	if(obj && !newsText && !view_id){
		view_id = $(obj).parents('.newsDetail').attr("id");
		newsText = '#'+view_id+' .newsText.contSet';
	}
    if(page != -1 && !is_login && need_check_login == 1){
        checkLogin();
    }

    if(page == -1 || is_login || need_check_login == 0){

        content_length = 0;
        start_flag = 0;
        end_flag = 0;
        if(page < 1) page_num = 1;
        else if(page > page_count) page_num = page_count;
        else page_num = page;
        if(flag == 1){
            $(newsText).html(content_arr);
            getChildren(newsText);
        }
        else{
            $(newsText).html(content_arr[page_num - 1]);
        }
        pagebutton(newsText, view_id, showAllText);
        if(page != -1){
            location.href = newsText;
        }
        setDivHeight(newsText)
    }

}

function getChildren(el) {
    var child = $(el).children();
    if(child.length > 0){
        child.each(function () {
            if(end_flag == 1) return false;
            content += $(this).contents().filter(function() {
                return this.nodeType === 3;
            }).text();
            content_length += $(this).contents().filter(function() {
                return this.nodeType === 3;
            }).text().length;

            //获取上一页结尾
            if(start_flag == 0 && content_length >= (page_num - 1) * page_length){
                var parents = $(this).parentsUntil(el);
                start_flag = 1;
                var need_length = content_length - ((page_num - 1) * page_length);
                //将当前页开头到上一页结尾为止多出来的内容去掉
                if(need_length > 0){
                    var now_html = $(this).html();
                    var now_text_length = $(this).contents().filter(function() {
                        return this.nodeType === 3;
                    }).text().length;
                    now_html = now_html.substring(now_text_length - need_length, now_html.length);
                    $(this).html(now_html);
                }

                parents.each(function () {
                    $(this).prevAll().remove();
                });
            }
            //获取当前页结尾
            if(content_length >= page_num * page_length){
                var parents = $(this).parentsUntil(el);
                var need_length = content_length - (page_num * page_length);
                if(need_length == 0){
                    parents.each(function () {
                        $(this).nextAll().remove();
                    });
                }
                else{
                    var now_text = $(this).contents().filter(function() {
                        return this.nodeType === 3;
                    }).text();
                    var need_text = now_text.substring(0, now_text.length - need_length);
                    $(this).text(need_text);
                    parents.each(function () {
                        $(this).nextAll().remove();
                    });
                }
                end_flag = 1;
                return false;
            }
            else {
                var flag = getChildren(this);
            }
        });
    }
}

function showAll() {
    if(need_check_login == 1){
        checkLogin();
    }
    if(is_login == true || need_check_login == 0){
        $('.news_pagination').remove();
        if(flag == 2){
            $(show_div).html(content_arr.join(''));
        }
        else{
            $(show_div).html(content_arr);
        }
        location.href = show_div;
        setDivHeight(show_div)
    }
}

function pagebutton(newsText,view_id, showAllText = '') {

    $('#'+view_id+' .news_pagination').remove();
    if (!showAllText) {
        showAllText = '显示全部';
    }

    var button_html = '<div class="news_pagination">';
    if(show_style == 1){
        for(var i = 1; i <= page_count; i++){
            if(i > page_count) break;
            if(i != page_num){
                button_html += '<span class="pagination_button" onclick="goto(' + i + `,'','',this, '` + showAllText + `')">` + i + '</span>';
            }
            else{
                button_html += '<span class="pagination_button now_page">' + i + '</span>';
            }
        }
    }
    else if(show_style == 2){
        button_html += `<select onchange="goto(this.value,'','',this, '` + showAllText + `')">`;
        for(var i = 1; i <= page_count; i++){
            if(i > page_count) break;
            button_html += '<option value="' + i + '" ' + (i == page_num ? 'selected' : '') + '>' + (lang == 'en' || lang == 2 ? ('Page ' + i) : ('第' + i + '页')) + '</option>';
        }
        button_html += '</select>';
    }
    else {
        var show_button = page_count > 8 ? 8 : page_count;
        var button_text = 1;

        if(page_num > 5){
            button_html += '<span class="pagination_button" onclick="goto(' + (page_num - 1) + `,'','',this, '` + showAllText + `')"><</span>`;
            button_text = page_num - 4;
        }

        for(var i = 1; i <= show_button; i++){
            if(button_text > page_count) break;
            if(button_text != page_num){
                button_html += '<span class="pagination_button" onclick="goto(' + button_text + `,'','',this, '` + showAllText + `')">` + button_text + '</span>';
            }
            else{
                button_html += '<span class="pagination_button now_page">' + button_text + '</span>';
            }
            button_text++;
        }

        if(page_num < page_count){
            button_html += '<span class="pagination_button" onclick="goto(' + (page_num + 1) + `,'','',this, '` + showAllText + `')">></span>`;
        }
    }
    button_html += '<span class="pagination_button show_all" onclick="showAll()">' + showAllText + '</span>';
    button_html += '</div>';

    $(newsText).after(button_html); 
	
}

function checkLogin(errorText = '', loginText = '') {
    var serverUrl = '//' + diy_js_server + '/sysTools.php?mod=viewsConn&act=checkUserLogin&idweb=' + id_web;
    if (!errorText) {
        errorText = '亲，您必须登录了才可继续查看该文章';
    }
    if (!loginText) {
        loginText = '马上登录';
    }

    //获取数据 xhrFields解决传输cookie问题
    $.ajax({
        type: 'get',
        cache: false,
        dataType: 'json',
        async: false,
        url: serverUrl,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function(result){
            if(result.is_login == false){
                var fun_str = is_mobile() ? 'OnLogin(' + lang +', 0, \'' + location.href + '\')' : 'OnLogin(' + lang +', 0)';
                var html = '<div class="mustlogin" style="position:fixed; z-index: 9999; top:0; left:0; width:100%; height:100%; overflow:hidden; background:rgba(0,0,0,.7); color:white; text-align:center;line-height:100%;">' +
                    '<div style="width:100%; height:100%; position:relative;" onclick="hideLogin()"></div>' +
                    '<div style="width:100%; position:absolute; top:50%; left:50%; transform:translateX(-50%) translateY(-50%); line-height:1.5; font-size:14px;">' + errorText + '，' +
                    '<a class=login_btn href="javascript:' + fun_str + ';" style="display:inline-block; border-bottom:1px solid white; color:white; font-size:14px;">' + loginText + '</a>' +
                    '</div>' +
                    '</div>';
                $('body').css({overflowY:'hidden',height:'100%'});
                $('body').append(html);
            }
            else {
                is_login = true
            }
        }
    });
}

function hideLogin() {
    $('.mustlogin').remove();
}

//=== viewid:newsDetail_style_01_1506318095542 ===//
//--
				$(function(){
					var viewid="newsDetail_style_01_1506318095542";
					var sys_url="viewid=newsDetail_style_01_1506318095542&name=newsDetail&style=style_01&langid=0&pageid=2240983&viewCtrl=newsDetail&isfb=1";
					var moreParams='';
					if(typeof(history.pushState) != 'undefined'){
						var hstate=JSON.stringify(history.state);
						if(hstate!='null'&& hstate!=null){
							eval('var hjson = ' + hstate);
							moreParams=hjson.moreParamsnewsDetail_style_01_1506318095542;
						}
					}
					RequestURL(viewid,sys_url,moreParams);
				});
			//--

//=== viewid:newsDetail_style_01_1506318095542 ===//

        $(function(){
            $('title').html('新闻标题 - 优科生物');
                        $('meta[name=keywords]').attr('content','新闻关键字');
                                    $('meta[name=description]').attr('content','新闻简介');
                    });
    

//=== viewid:newsDetail_style_01_1506318095542 ===//

	detailHeightAuto("newsDetail_style_01_1506318095542", "详情加载中");


//=== viewid:dh_style_03_1566453251567 ===//

/*pc,手机显示隐藏*/
function is_mobile(){
	return window.screen.width<767 || ($('body').width() > 0 && $('body').width() < 767);
}
$(function(){
	$("#dh_style_03_1566453251567 li").each(function(){
		  });
})