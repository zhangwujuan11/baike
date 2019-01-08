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
		}else{
		}
	}
	var accordion = new Accordion($('.accordion'), false);
	
	$(".link").click(function  () {
		var puls=$(this).find(".plus").css("display");
		if (puls == "block") {
			$(this).find(".jian").show();
			$(this).find(".plus").hide();
			$(this).parent().parent(".accordion").siblings().find(".plus").show();
			$(this).parent().parent(".accordion").siblings().find(".jian").hide();
		} else{
			$(this).find(".plus").show();
			$(this).find(".jian").hide();
			$(this).parent().parent(".accordion").siblings().find(".plus").show();
			$(this).parent().parent(".accordion").siblings().find(".jian").hide();
		}
	})
	
	
        
});


