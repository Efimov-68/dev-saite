$(document).ready(function(){
	$('.nav-submit-form').hide();
	// end hide()
	$('.nav-submit input').click(function(){
		$('.nav-submit-form').show(300);
	});
	$('.nav-submit-form img').click(function(){
		$('.nav-submit-form').hide(300);
	});	
	
});// end ready()