$(document).ready(function(){
	//var $childrenButton = $("input[value='для Детей']");
  //  $childrenButton.load("children00.html");
	//
  $('.right-heading-registration').html('<h2><input type="button" value="+"/>Регистрация на сайте</h2>');
	$('.right-block-registration').hide();
	$('.right-heading-singIn').html('<h2><input type="button" value="+"/>Вход на сайт</h2>');
	$('.right-block-singIn').hide();
	/*
	$('.right-heading-registration input[value="+"]').click(function(){
		$('.right-heading-registration').html('<h2><input type="button" value="-"/>Регистрация на сайте</h2>');
		$('.right-block-registration').fadeIn();
	});
	$('.right-heading-registration input[value="-"]').click(function(){
		$('.right-heading-registration').html('<h2><input type="button" value="+"/>Регистрация на сайте</h2>');
		$('.right-block-registration').fadeOut();
	});
	*/
	//

	/*

	if ($('.right-heading-singIn h2 input[value="+"]')) === '+'{
		$('.right-heading-singIn input[value="+"]').click(function(){
			$('.right-heading-singIn').html('<h2><input type="button" value="-"/>Вход на сайт</h2>');
			$('.right-block-singIn').fadeIn();
		});
	}else if ($('.right-heading-singIn h2 input[value="-"]')) === '-'{
		$('.right-heading-singIn input[value="-"]').click(function(){
			$('.right-heading-singIn').html('<h2><input type="button" value="+"/>Вход на сайт</h2>');
			$('.right-block-singIn').fadeOut();
		});
	}
	
	*/
});//ready()
