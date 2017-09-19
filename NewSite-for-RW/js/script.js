$(document).ready(function(){
	$('.nav-submit-form').hide();
	// end hide()
	$('.nav-submit input[type="button"]').click(function(){
		var $navSubmitForm = $(this).next('div.nav-submit-form');
		if ($navSubmitForm.is(':hidden')) {
			$navSubmitForm.slideDown(300);
		}else if ($('.nav-submit-form img').click()) {
			$navSubmitForm.fadeOut(300);
		}else{
			$navSubmitForm.show(5000);
		}
	});
});// end ready()