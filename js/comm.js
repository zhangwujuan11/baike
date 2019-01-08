$(document).ready(function () {
	//头尾公共提取
        $('header').load('top.html');
        $('footer').load('footer.html');
        
    //首页导航
    $(".root li").click(function(){
		$(".tntreebox").css("background","rgba(0,0,0,0.5)")
		$("#close").show();
		$(".ex-btn button").hide();
		var pnum=$(this).index()+1;
		$(this).addClass("cur");
		$(this).siblings().removeClass("cur");
 		$('.tree2 div').not("#o_"+pnum).hide();
 		$('.tree3 div').hide();
		$("#o_"+pnum).show(function(){
			$(this).find("li").click(function  () {
				var nnum=$(this).index()+1;
				$(this).addClass("cur");
				$(this).siblings().removeClass("cur");
				$("#o_"+pnum+"_"+nnum).show();
				$('.tree3 div').not("#o_"+pnum+"_"+nnum).hide();
			})
		})
	})
	
	$("#close").click(function  () {
		$(".tntreebox").css("background","transparent");
		$("#close").hide();
		$(".box").not(".root").hide();
		$(".root li").removeClass("cur");
		$(".ex-btn button").hide();
	})
	
	$(".tree3 li").click(function  () {
		$(".ex-btn button").show();
		$(this).addClass("cur");
		$(this).siblings().removeClass("cur");
	})
	
	//个人中心手风琴菜单
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;
		var links = this.el.find('.link');
		links.on('click', {
			el: this.el,
			multiple: this.multiple
		}, this.dropdown)
	}
	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
		$this = $(this), $next = $this.next();
		$next.slideToggle();
		$this.parent().toggleClass('open');
		if(!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
//			$(".plus").attr("src","img/personal/icon_jian.png")
		}else{
//			$(".plus").attr("src","img/personal/icon_plus.png")
		}
	}
	var accordion = new Accordion($('.accordion'), false);
	
	$(".link").click(function  () {
		var puls=$(this).parent(".open").parent(".accordion").css("display");
		console.log(puls)
		if (puls == "block") {
			$(this).find(".plus").attr("src","img/personal/icon_jian.png");
			$(this).parent().parent(".accordion").siblings().find(".plus").attr("src","img/personal/icon_plus.png");
		} else{
			$(this).find(".plus").attr("src","img/personal/icon_plus.png");
			$(this).parent().parent(".accordion").siblings().find(".plus").attr("src","img/personal/icon_plus.png");
		}
	})
	
	
        
});


