$(document).ready(function(){
	// registration & singIn
  $('.right-heading-registration').html('<h2><input type="button" value="+"/>Регистрация на сайте</h2>');
	$('.right-heading-singIn').html('<h2><input type="button" value="+"/>Вход на сайт</h2>');
  //if
  if('input[value="+"]' === 'input[value="+"]'){
    $('.right-heading-registration h2').click(function(){
      $('.right-block-registration').fadeIn();
      $('.right-heading-registration').html('<h2><input type="button" value="-"/>Регистрация на сайте</h2>');
    });
	  $('.right-heading-singIn h2').click(function(){
		  $('.right-heading-singIn').html('<h2><input type="button" value="-"/>Вход на сайт</h2>');
		  $('.right-block-singIn').fadeIn();
    });
  } else {
    $('.right-heading-registration h2').click(function(){
      $('.right-block-registration').hide();
      $('.right-heading-registration').html('<h2><input type="button" value="+"/>Регистрация на сайте</h2>');
    });
	  $('.right-heading-singIn h2').click(function(){
		  $('.right-heading-singIn').html('<h2><input type="button" value="+"/>Вход на сайт</h2>');
		  $('.right-block-singIn').fadeOut();
    });
  }// end if registration && singIn
  // Scroll back
  $('.button-back input').click(function(){
    $('#s_main').animate({'top':'+=10px'},1500);
  });// end Scroll back

});//ready()
