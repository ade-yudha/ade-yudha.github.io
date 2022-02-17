

$(window).scroll(function() { 

	var scrolly = $(this).scrollTop();
	console.log(scrolly);
    if ($(window).width() >= 1170) {

    	$(".ourpromise p").css('opacity','0');

    	$(".blockchain").css('opacity','0');

    	$(".casualgaming").css('opacity','0');
	    $(".winningprizes").css('opacity','0');

    	$(".quizcom").css('opacity','0');

    	$(".playon").css('opacity','0');
    	$(".playon-head").css('opacity','0');
	    $(".playon-subhead").css('opacity','0');
	    $(".playon-text").css('opacity','0');

	    $(".tokenomics-header").css('opacity','0');

	    $(".tokencontainer1").css('opacity','0');
	    $(".tokencontainer2").css('opacity','0');
	    $(".tokencontainer3").css('opacity','0');

	    $(".tl1").css('opacity','0');
	    $(".tl2").css('opacity','0');
	    $(".tl3").css('opacity','0');

	    $(".tech-info").css('opacity','0');

	    $(".roadcontainer1").css('opacity','0');
	    $(".roadcontainer2").css('opacity','0');
	    $(".roadcontainer3").css('opacity','0');
	    $(".roadcontainer4").css('opacity','0');

	    $(".partnerscontainer").css('opacity','0');

	    $(".teamblockimg").css('opacity','0');

    	if(scrolly>=200) {
    		$(".ourpromise p").css('opacity','1');
    		$(".para-self-funding").addClass("fadeInUpSmall");
    		$(".para-self-regulated").addClass("fadeInUpSmall");
    		$(".para-self-executing").addClass("fadeInUpSmall");
    		$(".para-transparent-ecosystem").addClass("fadeInUpSmall");
    	}
	    
	    if(scrolly>=550) {
	    	$(".blockchain").css('opacity','1');
	    	$(".blockchain").addClass("fadeInLeftSmall");
	    }
	    if(scrolly>=1500) {
	    	$(".casualgaming").css('opacity','1');
	    	$(".winningprizes").css('opacity','1');
	    	$(".casualgaming").addClass("fadeInLeftSmall");
	    	$(".winningprizes").addClass("fadeInRightSmall");
	    }
	    if(scrolly>=1800) {
	    	$(".quizcom").css('opacity','1');
	    	$(".quizcom").addClass("fadeInUpSmall");
	    }
	    if(scrolly>=3000) {
	    	$(".playon").css('opacity','1');
	    	$(".playon-head").css('opacity','1');
	    	$(".playon-subhead").css('opacity','1');
	    	$(".playon-text").css('opacity','1');
	    	
	    	$(".playon").addClass("zoomOutSmall");
	    	$(".playon-head").addClass("fadeInRightSmall");
	    	$(".playon-subhead").addClass("fadeInRightSmall");
	    	$(".playon-text").addClass("fadeInRightSmall");
	    }
	    if(scrolly>=3600) {
	     	$(".tokenomics-header").css('opacity','1');
	    	$(".tokenomics-header").addClass("fadeInUpSmall");
	    }
	    if(scrolly>=3800) {
	     	$(".tokencontainer1").css('opacity','1');
	     	$(".tokencontainer2").css('opacity','1');
	     	$(".tokencontainer3").css('opacity','1');

	    	$(".tokencontainer1").addClass("fadeInUpSmall");
	    	$(".tokencontainer2").addClass("fadeInUpSmall");
	    	$(".tokencontainer3").addClass("fadeInUpSmall");
	    }
	    if(scrolly>=4700) {
	    	$(".tl1").css('opacity','1');
	    	$(".tl2").css('opacity','1');
	    	$(".tl3").css('opacity','1');

	    	$(".tl1").addClass("fadeInUpLayer");
	    	$(".tl2").addClass("fadeIn");
	    	$(".tl3").addClass("fadeInDownLayer");
	    }
	    if(scrolly>=4850) {
	    	$(".tech-info").css('opacity','1');
	    	$(".tech-info").addClass("fadeInRightSmall");
	    }
	    if(scrolly>=5500) {
	    	$(".roadcontainer1").css('opacity','1');
	    	$(".roadcontainer2").css('opacity','1');
	    	$(".roadcontainer3").css('opacity','1');
	    	$(".roadcontainer4").css('opacity','1');

	    	$(".roadcontainer1").addClass("fadeInUpSmall");
	    	$(".roadcontainer2").addClass("fadeInUpSmall");
	    	$(".roadcontainer3").addClass("fadeInUpSmall");
	    	$(".roadcontainer4").addClass("fadeInUpSmall");
	    }
	    if(scrolly>=6100) {
	    	$(".partnerscontainer").css('opacity','1');
	    	$(".partnerscontainer").addClass("fadeInUpSmall");
	    }
	    if(scrolly>=6700) {
	    	$(".teamblockimg").css('opacity','1');
	    	$(".teamblockimg").addClass("slideInLeft");
	    }

	}


    if ($(window).width() < 1170) {
    	

    }
});


