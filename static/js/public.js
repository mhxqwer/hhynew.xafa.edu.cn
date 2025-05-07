function BrowserType() {
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
	var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器

	if (isIE) {
		var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(userAgent);
		var fIEVersion = parseFloat(RegExp["$1"]);
		if (fIEVersion < 10) {
			alert("浏览器版本过低，请升级或更换浏览器（谷歌、火狐等）")
			return false;
		} //IE版本过低
	}
	if (isEdge) {
		alert("浏览器版本过低，请升级或更换浏览器（谷歌、火狐等）")
		return false;
	}
}
BrowserType() // 浏览器是否为ie


function showdiv(doc) {
	$(doc).each(function (index, element) {
		var e = $(this);
		var fix = parseInt(e.attr("fix"));
		if (!fix && fix != 0) { fix = $(window).height() * 10 * 0.1; }
		else { fix = $(window).height() * fix * 0.1; }
		if ($(window).scrollTop() >= $(e).offset().top - fix) {
			if (!$(e).hasClass("showdiv")) {
				$(e).addClass("showdiv");
			}
		}
		else {
			if ($(e).hasClass("showdiv")) {
				$(e).removeClass("showdiv");
			}
		}
	});
}

$(function () {
	//搜索
	$(".search-con button").click(function () {
		$(".yc-search").stop().fadeIn();
		$("html").css("overflow", "hidden");
	})
	$(".yc-search-bg").click(function () {
		$(".yc-search").stop().fadeOut();
		$("html").css("overflow-y", "visible");
	})

	//显示隐藏
	$(".g-nav").click(function () {
		$(".g-nav").toggleClass('on');
		$(".top").toggleClass('on');
		$(".top-nav").toggleClass("fadeInRight")
		$(".top-yc").stop().slideToggle(500);
		// $(".top-rbox").stop().fadeToggle();
	});

	// $(".g-nav .close-menu").click(function () {
	// 	$(".top-yc").fadeOut(500);
	// 	$(".nav").fadeIn();
	 
	// });

 




	// 移动端导航
	$(".menu").click(function () {
		// $(".m-nav").animate({
		// 	"right": "0"
		// }, 300);
		$(".m-nav").stop().fadeIn()
		$(this).hide()
		$(this).siblings(".close-menu").fadeIn();
		$("html").css("overflow", "hidden");
	})
	$(".close-menu").click(function () {
		$(".close-menu").fadeOut()
		// $(".m-nav").animate({
		// 	"right": "-100%"
		// }, 300);
		$(".m-nav").stop().fadeOut()
		$(".menu").fadeIn();
		$("html").css("overflow", "visible");
	})
	$(".m-nav>ul>li>span").click(function () {
		$(this).toggleClass("on").parent().siblings("li").find("span").removeClass("on")
		$(this).siblings("ul").slideToggle().parent().siblings("li").find("ul").slideUp()
	})

	//  移动端导航 二级导航展开关闭 
	$(".leftNav>h2 span").click(function () {
		$(this).toggleClass("on");
		$(".leftNav>ul").stop().slideToggle();
	})

	// 二级页面 移动端左侧三级导航 展示
	$(".leftNav>ul>li>span").click(function () {
		$(this).parent().stop().toggleClass("on").siblings("li").removeClass("on");
		$(this).siblings("ul").stop().slideToggle(300).parent().siblings().find("ul").stop().slideUp();
	})

	//新增
	$(".top-nav>ul>li>div>ul>li>span").click(function () {
		$(this).toggleClass("on");
		$(this).siblings("ul").stop().slideToggle();
		$(this).parent().siblings().children("span").removeClass("on");
		$(this).parent().siblings().children("ul").stop().slideUp();
	})

})