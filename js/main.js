$(function(){

	(function(){
		var us = getCookie("aa");
		// var name = JSON.parse(us).name;
		if(us!=""){
			console.log("欢迎"+us+"登录")
		}else{
			// window.location.href = "http://localhost:3000/login.html" ;
		}

	})();
	// 设置cookie、获取cookie
	function setCookie(cname,cvalue,exdays){
	  var d = new Date();
	  d.setTime(d.getTime()+(exdays*24*60*60*1000));
	  var expires = "expires="+d.toGMTString();
	  document.cookie = cname + "=" + cvalue + "; " + expires;
	}

	function getCookie(cname){
	  var name = cname + "=";
	  var ca = document.cookie.split(';');
	  for(var i=0; i<ca.length; i++) 
	  {
	    var c = ca[i].trim();
	    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	  }
	  return "";
	}	


	// 二级导航 下拉菜单

	// $('.nav-ul').find('li').on('mouseenter',function(){
	// 	$('.subnav').removeClass('hide');
	// })
	// $('.nav-ul').find('li').on('mouseleave',function(){
	// 	$('.subnav').addClass('hide');
	// })

	$('.pull-btn').eq(0).on('mouseenter',function(){
		$(".subnav").css("height",300)
		$(".subnav-chanpin").addClass('show').siblings().removeClass("show")
    })
	$('.pull-btn').eq(1).on('mouseenter',function(){
		$(".subnav").css("height",300)
		$(".subnav-fangan").addClass('show').siblings().removeClass("show")
    })
	$('.pull-btn').eq(2).on('mouseenter',function(){
		$(".subnav").css("height",300)
		$(".subnav-fuwu").addClass('show').siblings().removeClass("show");
    })
	$('.pull-btn').eq(3).on('mouseenter',function(){
		$(".subnav").css("height",300)
		$(".subnav-xiazai").addClass('show').siblings().removeClass("show");
    })
	$('.pull-btn').eq(4).on('mouseenter',function(){
		$(".subnav").css("height",300)
		$(".subnav-shangcheng").addClass('show').siblings().removeClass("show");
    })


	$('.pull-btn').on('mouseleave',function(){
		$(".subnav").css("height",0)
	})
	$('.subnav').hover(function(){
		$(".subnav").css("height",300)
	},function(){
		$(".subnav").css("height",0)
	})

})