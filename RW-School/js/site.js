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
	$('#menuParagraph img[alt="RabbitWeb-School.ru"]').hide();
	$('img.faqImg').hide();
	$('img.skypeImg').hide();
	$('#direction-training-scratch').hide();
	$('#direction-training-python').hide();
	$('#direction-training-javascript').hide();
	$('img[alt="Scratch"]').hide();
	$('#sprites img[alt="Спрайт"]').hide();
	//end .hide

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
	$('#menuIcon').click(function(){
    	var $menuParagraph = $(this).next('#menuParagraph');
    	if ($menuParagraph.is(':hidden')) {
    		$menuParagraph.slideDown(300);
    		$(this).addClass('close');
    	}else{
    		$menuParagraph.slideUp(300);
    		$(this).removeClass('close');
    	}
	});
	$('#menuParagraph img[alt="RabbitWeb-School.ru"]').fadeIn(3500);
	$('img.faqImg').fadeIn(1500);
	$('img.skypeImg').fadeIn(3500);
	$('#direction-training').show(function(){
		$('#direction-training-scratch').fadeIn(4000);
		$('#direction-training-python').fadeIn(5000);
		$('#direction-training-javascript').fadeIn(6000);
	});
	$('img[alt="Scratch"]').slideDown(2200, 'linear');
	$('#sprites img[alt="Спрайт"]').fadeIn(3000);
});//end ready
//*******TIME********
$(document).ready(function() {
	function displayTime() {
		$('#time').text(getTime(true));
	}
	displayTime();
	setInterval(displayTime,1000);
}); // end ready
function getTime(secs) {
	var sep = ':'; //separator character
	var hours,minutes,seconds,time/*,am_pm*/;
	var now = new Date();
	hours = now.getHours();
	/*if (hours < 24) {
		am_pm = 'am';
	} else {
		am_pm = 'pm';
	}*/
	hours = hours % 24;
	if (hours === 0) {
		hours = 24;
	} 
	time = hours;
	minutes = now.getMinutes();
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	time += sep + minutes;
	if (secs) {
		seconds = now.getSeconds();
		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		time += sep + seconds;
	} 
	return time /*+ ' ' + am_pm*/;
}
//*******end TIME********