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
  $('#visiting').click(function(){
  	$('#visiting div').fadeToggle(300);
  });
  $('#landing').click(function(){
  	$('#landing div').fadeToggle(300);
  });
  $('#company').click(function(){
  	$('#company div').fadeToggle(300);
  });
  $('#magazyn').click(function(){
  	$('#magazyn div').fadeToggle(300);
  });//END effect information menu Developer to services
  
});//END READY