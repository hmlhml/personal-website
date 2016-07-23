(function($) {

	"use strict";	

  	$(".main-menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$('a.active').removeClass('active');
    	$(this).addClass('active');
		$("#menu-container .content").slideUp('slow');
		$("#menu-container #menu-"+id[1]).slideDown('slow');		
		$("#menu-container .homepage").slideUp('slow');
		return false;
	});

  	var arr=["left -108px","-203px -108px","-103px -108px","-303px -108px"];
  	$(".main-menu-nav li span").css("backgroundPosition","").eq(0).css("background-position",arr[0]);
  	$(".main-menu-nav li a").click(function(){
  		var index=$(this).index(".main-menu-nav li a");
  		// alert($(".main-menu-nav li span").length)
  		$(".main-menu-nav li span").css("backgroundPosition","").eq(index).css("background-position",arr[index]);
  	})
  		

	$(".main-menu a.homebutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .homepage").slideDown('slow');
		$(".logo-top-margin").animate({marginLeft:'45%'}, "slow");
		$(".logo-top-margin").animate({marginTop:'120px'}, "slow");
		return false;
	});

	$(".main-menu a.aboutbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .about-section").slideDown('slow');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$(".main-menu a.projectbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .gallery-section").slideDown('slow');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$(".main-menu a.contactbutton").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .contact-section").slideDown('slow');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$('.toggle-menu').click(function(){
        $('.show-menu').stop(true,true).slideToggle();
        return false;
    });

    $('.show-menu a').click(function() {
    	$('.show-menu').fadeOut('slow');
    });

    $(".box-content .works").fadeOut().eq(0).fadeIn();
    $(".project-pages a").eq(0).css("background","#DB5046");
    $(".project-pages a").click(function(){
    	var index=$(this).index(".project-pages a");
    	$(".box-content .works").fadeOut().eq(index).fadeIn();
    	$(".project-pages a").css("background","").eq(index).css("background","#DB5046");

    })

})(jQuery);