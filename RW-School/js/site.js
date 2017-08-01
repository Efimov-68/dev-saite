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
	$('#info-scratch-easy').hide();
	$('#info-scratch-middle').hide();
	$('#info-python-easy').hide();
	$('#info-python-middle').hide();
	$('#info-python-mashine').hide();
	$('#info-javascript-easy').hide();
	$('#info-javascript-middle').hide();
	$('#faq div p').hide();
	//end .hide
	$('#scratch-easy i').click(function(){
    	var $scratchEasy = $(this).next('#info-scratch-easy');
    	if ($scratchEasy.is(':hidden')) {
    		$scratchEasy.slideDown(300);
    		$(this).addClass('close');
    	}else{
    		$scratchEasy.slideUp(300);
    		$(this).removeClass('close');
    	}
	});
	$('#scratch-middle i').click(function(){
    	var $scratchMiddle = $(this).next('#info-scratch-middle');
    	if ($scratchMiddle.is(':hidden')) {
    		$scratchMiddle.slideDown(300);
    		$(this).addClass('close');
    	}else{
    		$scratchMiddle.slideUp(300);
    		$(this).removeClass('close');
    	}
	});
	$('#python-easy i').click(function(){
    	var $pythonEasy = $(this).next('#info-python-easy');
    	if ($pythonEasy.is(':hidden')) {
    		$pythonEasy.slideDown(300);
    		$(this).addClass('close');
    	}else{
    		$pythonEasy.slideUp(300);
    		$(this).removeClass('close');
    	}
	});
	$('#python-middle i').click(function(){
    	var $pythonMiddle = $(this).next('#info-python-middle');
    	if ($pythonMiddle.is(':hidden')) {
    		$pythonMiddle.slideDown(300);
    		$(this).addClass('close');
    	}else{
    		$pythonMiddle.slideUp(300);
    		$(this).removeClass('close');
    	}
	});
	$('#python-mashine i').click(function(){
    	var $pythonMashine = $(this).next('#info-python-mashine');
    	if ($pythonMashine.is(':hidden')) {
    		$pythonMashine.slideDown(300);
    		$(this).addClass('close');
    	}else{
    		$pythonMashine.slideUp(300);
    		$(this).removeClass('close');
    	}
	});
	$('#javascript-easy i').click(function(){
    	var $javascriptEasy = $(this).next('#info-javascript-easy');
    	if ($javascriptEasy.is(':hidden')) {
    		$javascriptEasy.slideDown(300);
    		$(this).addClass('close');
    	}else{
    		$javascriptEasy.slideUp(300);
    		$(this).removeClass('close');
    	}
	});
	$('#javascript-middle i').click(function(){
    	var $javascriptMiddle = $(this).next('#info-javascript-middle');
    	if ($javascriptMiddle.is(':hidden')) {
    		$javascriptMiddle.slideDown(300);
    		$(this).addClass('close');
    	}else{
    		$javascriptMiddle.slideUp(300);
    		$(this).removeClass('close');
    	}
	});
	$('#faq div h3').click(function(){
    	var $faqDivP = $(this).next('#faq div p');
    	if ($faqDivP.is(':hidden')) {
    		$faqDivP.slideDown(300);
    		$(this).addClass('close');
    	}else{
    		$faqDivP.slideUp(300);
    		$(this).removeClass('close');
    	}
	});
});//end ready