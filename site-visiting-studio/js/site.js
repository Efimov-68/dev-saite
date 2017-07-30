$(document).ready(function() {
	// open external links in new window
	$('a[href^="http://"]').attr('target','_blank');
	
	//position resources panel on screen
	$('#resources').show().delay(500).animate({ left : '-25em' }, 250).animate({left:'-29em'},250);
	
	// resources panel
	var panel=false;
	$('.open').click(function() {
		if (!panel) {
			$(this).text('x');
			$('#resources').animate({
				left : 0
			}, 250); // end animate
			panel=true;
		} else {
			$(this).text('o');
			$('#resources').animate({
				left : '-29em'
			}, 250); // end animate
			panel=false;
		}
	});
}); // end ready
$(document).ready(function() {
	// open external links in new window
	$('a[href^="http://"]').attr('target','_blank');
	
	//position resources panel on screen
	$('#resources-scratch').show().delay(500).animate({ left : '-25em' }, 250).animate({left:'-29em'},250);
	
	// resources panel
	var panel=false;
	$('.open').click(function() {
		if (!panel) {
			$(this).text('x');
			$('#resources-scratch').animate({
				left : 0
			}, 250); // end animate
			panel=true;
		} else {
			$(this).text('o');
			$('#resources-scratch').animate({
				left : '-29em'
			}, 250); // end animate
			panel=false;
		}
	});
}); // end ready
$(document).ready(function() {
	// open external links in new window
	$('a[href^="http://"]').attr('target','_blank');
	
	//position resources panel on screen
	$('#resources-python').show().delay(500).animate({ left : '-25em' }, 250).animate({left:'-29em'},250);
	
	// resources panel
	var panel=false;
	$('.open').click(function() {
		if (!panel) {
			$(this).text('x');
			$('#resources-python').animate({
				left : 0
			}, 250); // end animate
			panel=true;
		} else {
			$(this).text('o');
			$('#resources-python').animate({
				left : '-29em'
			}, 250); // end animate
			panel=false;
		}
	});
}); // end ready
$(document).ready(function(){
	$('#info-scratch-learn').hide();
	$('#info-python-easy').hide();
	$('#info-python-middle').hide();
	$('#info-javascript-middle').hide();
	//end .hide
	$('#scratch-learn').click(function(){
    	var $scratchLearn = $(this).next('#info-scratch-learn');
    	if ($scratchLearn.is(':hidden')) {
    		$scratchLearn.slideDown(300);
    		$(this).addClass('close');
    	}else{
    		$scratchLearn.slideUp(300);
    		$(this).removeClass('close');
    	}
	});
	$('#python-easy').click(function(){
    	var $pythonEasy = $(this).next('#info-python-easy');
    	if ($pythonEasy.is(':hidden')) {
    		$pythonEasy.slideDown(300);
    		$(this).addClass('close');
    	}else{
    		$pythonEasy.slideUp(300);
    		$(this).removeClass('close');
    	}
	});
	$('#python-middle').click(function(){
    	var $pythonMiddle = $(this).next('#info-python-middle');
    	if ($pythonMiddle.is(':hidden')) {
    		$pythonMiddle.slideDown(300);
    		$(this).addClass('close');
    	}else{
    		$pythonMiddle.slideUp(300);
    		$(this).removeClass('close');
    	}
	});
	$('#javascript-middle').click(function(){
    	var $javascriptMiddle = $(this).next('#info-javascript-middle');
    	if ($javascriptMiddle.is(':hidden')) {
    		$javascriptMiddle.slideDown(300);
    		$(this).addClass('close');
    	}else{
    		$javascriptMiddle.slideUp(300);
    		$(this).removeClass('close');
    	}
	});
});//end ready