$(document).ready(function(){
	$('.nav-submit-form').hide();
	$('.menuLogo2').hide();
	// end hide()
	$('.nav-submit input').click(function(){
		$('.nav-submit-form').show(300);
	});
	$('.nav-submit-form img').click(function(){
		$('.nav-submit-form').hide(300);
	});
	$('.menuLogo1').click(function(){
		$('.nav').show(300);
		$('.menuLogo1').hide();
		$('.menuLogo2').show();
	});
	$('.menuLogo2').click(function(){
		$('.nav').hide(300);
		$('.menuLogo2').hide();
		$('.menuLogo1').show();
	});
	
});// end ready()