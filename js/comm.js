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
	
	//没有搜索到相关主播
	setTimeout(function(){ 
		$("#havenone").fadeOut();
	}, 2000);
	
	//商品列表搜索栏
	$(".list-menclose").click(function  () {
		$(".list-men").hide();
	})
	
	$(".list-men").click(function(e) {
		if (!$(e.target).is(".list-mencon, .list-mencon ul, .list-mencon>p,  .list-mencon p button")) {
			$(".list-men").hide();
		}
	})
	
	$(".list-mencon p button").click(function  () {
		$(this).addClass("current");
		$(this).siblings().removeClass("current");
		$(".list-men").show()
	})
		
	
	$("#game").click(function  () {
		$(".list-mencon p").hide();
		$(".list-men .list-mencon").css("left","-26px");
		$(".list-men").show(function(){
			$(".list-mencon li").click(function  () {
			var tex=$(this).html();
			$("#game").html(tex+'<img src="img/shop/icon_down.png" alt="" />');
			$(".list-men").hide()
			})
		}
			
		)
	})
	
	$("#place1").click(function  () {
		$(".list-mencon p").show();
		$(".list-men .list-mencon ul").css("padding","10px");
		$(".list-men .list-mencon").css("left","60px");
		$(".list-men").show(function(){
			$(".list-mencon li").click(function  () {
			var tex=$(this).html();
			$("#place1").html(tex+'<img src="img/shop/icon_down.png" alt="" />');
			$(".list-men").hide()
			})
		}
			
		)
	})
	
	$("#place2").click(function  () {
		$(".list-mencon p").hide();
		$(".list-men .list-mencon").css("left","130px");
		$(".list-men").show(function(){
			$(".list-mencon li").click(function  () {
			var tex=$(this).html();
			$("#place2").html(tex+'<img src="img/shop/icon_down.png" alt="" />');
			$(".list-men").hide()
			})
		}
			
		)
	})
	
	$("#currency").click(function  () {
		$(".list-mencon p").hide();
		$(".list-men .list-mencon").css("left","203px");
		$(".list-men").show(function(){
			$(".list-mencon li").click(function  () {
			var tex=$(this).html();
			$("#currency").html(tex+'<img src="img/shop/icon_down.png" alt="" />');
			$(".list-men").hide()
			})
		}
			
		)
	})
	
	
	$(".list-topcon table tbody tr").click(function  () {
		$(this).css({"background":"#FF8800","color":"white"});
	    $(this).find(".maincolor").css({"color":"white"});
	    $(this).siblings().css({"background":"white","color":"black"});
	    $(this).siblings().find(".maincolor").css({"color":"#FF8800"});
	    $(this).parents().siblings().find("tbody tr").css({"background":"white","color":"black"});
	    $(this).parents().siblings().find("tbody tr .maincolor").css({"color":"#FF8800"});
	})
	
	$("#second-class li:not(.second-class1)").click(function  () {
		$(this).css({"color":"#FF8800","text-decoration":"underline"});
		$(this).siblings().css({"color":"black","text-decoration":"none"})
	})
	
	$(".list-topcon img,.list-topcon span").click(function  () {
		var kuaqu="按区服筛选";
		var kuwhat=$(".list-topcon span").html()
		if (kuwhat == kuaqu) {
			$(".list-topcon span").html("按跨区筛选");
			$("#thr-class").show();
			$("#four-class").show();
			$("#second-class").hide();
			$(".list-topcon table").hide();
		} else{
			$(".list-topcon span").html("按区服筛选");
			$("#thr-class").hide();
			$("#four-class").hide();
			$("#second-class").show();
			$(".list-topcon table").show();
		}
	})
	
	$("#thr-class li").not(".thr-class1").click(function  () {
		$(this).css({"color":"#FF8800","text-decoration":"underline"})
		$(this).siblings().css({"color":"black","text-decoration":"none"})
	})
	$("#four-class li").not(".four-class1").click(function  () {
		$(this).css({"color":"#FF8800","text-decoration":"underline"})
		$(this).siblings().css({"color":"black","text-decoration":"none"})
	})
	
	//确认订单
	$("#jianinpu").click(function  () {
		var shonum=$("#show-numinpu").val();
		if (shonum > 1) {
			shonum-=1
			$("#jianinpu").css("opacity","1")
			$("#show-numinpu").val(shonum);
			var a= parseInt($("#price").html());
			var b= parseInt($("#show-numinpu").val());
			var c=a*b;
			$("#tognum, .tognum").html(c.toFixed(2));
			
		} else{
			$("#show-numinpu").val(1);
			$("#jianinpu").css("opacity","0.5");
		}
	})
	$("#jiainpu").click(function  () {
		var shonwum=parseInt($("#show-numinpu").val())
			shonwum=shonwum+1
			$("#show-numinpu").val(shonwum);
			$("#jianinpu").css("opacity","1");
			var a= parseInt($("#price").html());
			var b= parseInt($("#show-numinpu").val());
			var c=a*b;
			$("#tognum, .tognum").html(c.toFixed(2));
	})
	
	$("#show-numinpu").change(function  () {
		var a= parseInt($("#price").html());
		var b= parseInt($("#show-numinpu").val());
		var c=a*b;
		$("#tognum, .tognum").html(c.toFixed(2));
	})
	
	var a= parseInt($("#price").html());
	var b= parseInt($("#show-numinpu").val());
	var c=a*b;
	$("#tognum, .tognum").html(c.toFixed(2));
	
});


