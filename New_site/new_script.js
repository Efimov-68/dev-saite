$(document).ready(function(){
	//
  $('.right-heading-registration').html('<h2><input type="button" value="+"/>Регистрация на сайте</h2>');
	$('.right-block-registration').hide();
	$('.right-heading-singIn').html('<h2><input type="button" value="+"/>Вход на сайт</h2>');
	$('.right-block-singIn').hide();
  $('.right-heading-registration input').click(function(){
	  if ($('.right-heading-registration input[value="+"]') === $('.right-heading-registration input[value="+"]')){
		  $('.right-heading-registration').html('<h2><input type="button" value="-"/>Вход на сайт</h2>');
		  $('.right-block-registration').fadeIn();
	  }else if ($('.right-heading-registration input[value="-"]') === $('.right-heading-registration input[value="-"]')){
			$('.right-heading-registration').html('<h2><input type="button" value="+"/>Вход на сайт</h2>');
			$('.right-block-registration').fadeOut();
	  }
	});
  $('.right-heading-singIn input').click(function(){
	  if ($('.right-heading-singIn input[value="+"]') === $('.right-heading-singIn input[value="+"]')){
		  $('.right-heading-singIn').html('<h2><input type="button" value="-"/>Вход на сайт</h2>');
		  $('.right-block-singIn').fadeIn();
	  }else if ($('.right-heading-singIn input[value="-"]') === $('.right-heading-singIn input[value="-"]')){
			$('.right-heading-singIn').html('<h2><input type="button" value="+"/>Вход на сайт</h2>');
			$('.right-block-singIn').fadeOut();
	  }
	});//end registration && singIn
  $('.content-select input[value="С чего начать?"]').click(function(){
    
  });
});//ready()
