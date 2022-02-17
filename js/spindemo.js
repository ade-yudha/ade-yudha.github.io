
let easingValue = 2;


$(window).scroll(function() {   
	
    let yPos = window.pageYOffset;
    $('.polyhedron.tetrahedron').css('top', '0px');

    var left = (yPos / easingValue) % 360;
  	var rotate = "rotateZ(" + left + "deg ) rotateX(" + left + "deg)";
    $('#tetrahedron').css({"transform": rotate});

    if ($(window).width() >= 1170) {

	    $('#tetra-mid').css('opacity', '1');
	    var midmoving = (yPos / easingValue) - 400;
	    var tetratransmid =  "translateY(" + midmoving + "px )" ;
	    $('#tetra-mid').css({"transform": tetratransmid});

	    $('#tetra-left').css('opacity', '1');
	    $('#tetra-left').css('left', '0px');
	    $('#tetra-left').css('top', '300px');
	    var leftmoving = (yPos / easingValue) - 700;
	    var tetratransleft =  "translateY(" + leftmoving + "px ) translateX(" + leftmoving + "px )" ;
	    $('#tetra-left').css({"transform": tetratransleft});
	 	
	 	$('#tetra-right').css('opacity', '1');
	 	$('#tetra-right').css('left', '0px');
	 	$('#tetra-right').css('top', '300px');
	 	var rightmovingx = -((yPos / easingValue) - 700);
	 	var rightmovingy = (yPos / easingValue) - 700;
	    var tetratransright =  "translateY(" + rightmovingy + "px ) translateX(" + rightmovingx + "px )" ;
	    $('#tetra-right').css({"transform": tetratransright});


	    $('#tetra-left').css({"opacity": '0'});
	    $('#tetra-right').css({"opacity": '0'});
	    if(yPos>=660){
	    	$('#tetra-left').css({"opacity": '1'});
	    	$('#tetra-right').css({"opacity": '1'});
	    }

	    if(yPos>=1399){
	    	$('#tetra-mid').css({"opacity": '0'});
	    	$('#tetra-left').css({"opacity": '0'});
	    	$('#tetra-right').css({"opacity": '0'});
	    	$('#tetrahedron').css({"opacity": '1'});
	    }else{
	    	$('#tetrahedron').css({"opacity": '0'});
	    }

	}

    if ($(window).width() < 1170) {
	    $('#tetrahedron').css({"opacity": '1'});
	    
    	/*$('#tetra-mid').css('left', '0px');
	    var mob_midmoving = (yPos / easingValue)-1000;
	    var mob_tetratransmid =  "translateY(" + mob_midmoving + "px )" ;
	    $('#tetra-mid').css({"transform": mob_tetratransmid});

	    $('#tetra-left').css('left', '0px');
	    $('#tetra-left').css('top', '0px');
	   	var mob_leftmoving = (yPos / easingValue)-1000;
	    var mob_tetratransleft =  "translateY(" + mob_leftmoving + "px ) translateX(" + mob_leftmoving + "px )" ;
	    $('#tetra-left').css({"transform": mob_tetratransleft});
	 	

	 	$('#tetra-right').css('left', '0px');
	 	$('#tetra-right').css('top', '0px');
	 	var mob_rightmovingx = -((yPos / easingValue))+1000;
	 	var mob_rightmovingy = (yPos / easingValue)-1000;
	    var mob_tetratransright =  "translateY(" + mob_rightmovingy + "px ) translateX(" + mob_rightmovingx + "px )" ;
	    $('#tetra-right').css({"transform": mob_tetratransright});
	    
	    $('#tetra-mid').css({"opacity": '1'});
    	$('#tetra-left').css({"opacity": '1'});
    	$('#tetra-right').css({"opacity": '1'});
    	$('#tetrahedron').css({"opacity": '1'});

	    if(yPos<=1400){
	    	$('#tetra-mid').css({"opacity": '0'});
	    	$('#tetra-left').css({"opacity": '0'});
	    	$('#tetra-right').css({"opacity": '0'});
	    }

	    if(yPos>=2010){
	    	$('#tetra-mid').css({"opacity": '0'});
	    	$('#tetra-left').css({"opacity": '0'});
	    	$('#tetra-right').css({"opacity": '0'});
	    	$('#tetrahedron').css({"opacity": '1'});
	    }else{
	    	$('#tetrahedron').css({"opacity": '0'});
	    }*/


    }
});


