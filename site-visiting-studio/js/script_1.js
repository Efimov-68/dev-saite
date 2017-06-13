//Start JS code
$(document).ready(function(){
	$('#basic h1').hide();
	$('#basic h2').hide();
	$('#basic').show(function(){
		$('#basic h1,#basic h2').slideDown(2000);
	});//END title effect RabbitWeb
  $('.answer').hide();
  $('#seo-basic h2').click(function(){
    var $answer = $(this).next('.answer');
    if ($answer.is(':hidden')) {
      $answer.slideDown();
      $(this).addClass('.close');
    }else{
      $answer.slideUp();
      $(this).removeClass('.close');
    }
  });//END SEO effect hide information

	$('.callBack').hide();
  $('#contacts a').click(function(evt){
   	evt.preventDefault();
   	$('.callBack').fadeIn(300);
  });
  $('.callBack img').click(function(evt){
  	evt.preventDefault;
  	$('.callBack').fadeOut(300);
  });//END callBack effect

  $('#visiting div').hide(); 
  $('#landing div').hide();
  $('#company div').hide();
  $('#magazyn div').hide();
  $('#visiting').click(function(evt){
    evt.preventDefault;
    $('#visiting div').slideDown(300);
  });
  $('#landing').click(function(evt){
    evt.preventDefault;
  	$('#landing div').slideDown(300);
  });
  $('#company').click(function(evt){
    evt.preventDefault;
  	$('#company div').slideDown(300);
  });
  $('#magazyn').click(function(evt){
    evt.preventDefault;
  	$('#magazyn div').slideDown(300);
  });//END effect information menu Developer to services

  $('#CMS div.blockLeft').hide();
  $('#browser div.blockRight').hide();
  $('#seo-find div.blockLeft').hide();
  $('#servTech div.blockRight').hide();
  $('#CMS').click(function(){
    $('#CMS div').fadeToggle(300);
  });
  $('#browser').click(function(){
    $('#browser div').fadeToggle(300);
  });
  $('#seo-find').click(function(){
    $('#seo-find div').fadeToggle(300);
  });
  $('#servTech').click(function(){
    $('#servTech div').fadeToggle(300);
  });//END info-basic CMS, browser, seo, tech


});//END READY