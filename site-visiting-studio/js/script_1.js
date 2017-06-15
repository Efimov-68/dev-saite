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

  //$('#visiting div').hide(); 
  //$('#landing div').hide();
  //$('#company div').hide();
  //$('#magazyn div').hide();
  //$('#visiting').click(function(evt){
  //  evt.preventDefault;
  //  $('#visiting div').slideDown(300);
  //});
  //$('#landing').click(function(evt){
  //  evt.preventDefault;
  //	$('#landing div').slideDown(300);
  //});
  //$('#company').click(function(evt){
  //  evt.preventDefault;
  //	$('#company div').slideDown(300);
  //});
  //$('#magazyn').click(function(evt){
  //  evt.preventDefault;
  //	$('#magazyn div').slideDown(300);
  //});//END effect information menu Developer to services

  //$('#CMS div.blockLeft').hide();
  //$('#browser div.blockRight').hide();
  //$('#seo-find div.blockLeft').hide();
  //$('#servTech div.blockRight').hide();
  //$('#CMS').click(function(){
  //  $('#CMS div').fadeToggle(300);
  //});
  //$('#browser').click(function(){
  //  $('#browser div').fadeToggle(300);
  //});
  //$('#seo-find').click(function(){
  //  $('#seo-find div').fadeToggle(300);
  //});
  //$('#servTech').click(function(){
  //  $('#servTech div').fadeToggle(300);
  //});//END info-basic CMS, browser, seo, tech

  $('#serv-info_1 p').hide();
  $('#serv-info_1 h2').click(function() {
    var $servinfo_1p = $(this).next('#serv-info_1 p');
      if ($servinfo_1p.is(':hidden')) {
        $servinfo_1p.slideDown();
        $(this).addClass('close');
      }else{
        $servinfo_1p.fadeOut();
        $(this).removeClass('close');
      }
    }); // END ЭТАПЫ РАБОТЫ
  $('#visiting div').hide();
  $('#landing div').hide();
  $('#company div').hide();
  $('#magazyn div').hide();
  $('#CMS div').hide();
  $('#browser div').hide();
  $('#seo-find div').hide();
  $('#servTech div').hide();
  $('#visiting h2').click(function(){
    var $visiting = $(this).next('#visiting div');
    if ($visiting.is(':hidden')) {
      $visiting.fadeIn(300);
      $(this).addClass('close');
    }else{
      $visiting.fadeOut(300);
      $(this).removeClass('close');
    }
  });
  $('#landing h2').click(function(){
    var $landing = $(this).next('#landing div');
    if ($landing.is(':hidden')) {
      $landing.fadeIn(300);
      $(this).addClass('close');
    }else{
      $landing.fadeOut(300);
      $(this).removeClass('close');
    }
  });
  $('#company h2').click(function(){
    var $company = $(this).next('#company div');
    if ($company.is(':hidden')) {
      $company.fadeIn(300);
      $(this).addClass('close');
    }else{
      $company.fadeOut(300);
      $(this).removeClass('close');
    }
  });
  $('#magazyn h2').click(function(){
   var $magazyn = $(this).next('#magazyn div');
    if ($magazyn.is(':hidden')) {
      $magazyn.fadeIn(300);
      $(this).addClass('close');
    }else{
      $magazyn.fadeOut(300);
      $(this).removeClass('close');
    }
  });
  $('#CMS h3').click(function(){
    var $CMS = $(this).next('#CMS div');
    if ($CMS.is(':hidden')) {
      $CMS.fadeIn(300);
      $(this).addClass('close');
    }else{
      $CMS.fadeOut(300);
      $(this).removeClass('close');
    }
  });
  $('#browser h3').click(function(){
    var $browser = $(this).next('#browser div');
    if ($browser.is(':hidden')) {
      $browser.fadeIn(300);
      $(this).addClass('close');
    }else{
      $browser.fadeOut(300);
      $(this).removeClass('close');
    }
  });
  $('#seo-find h3').click(function(){
    var $seofind = $(this).next('#seo-find div');
    if ($seofind.is(':hidden')) {
      $seofind.fadeIn(300);
      $(this).addClass('close');
    }else{
      $seofind.fadeOut(300);
      $(this).removeClass('close');
    }
  });
  $('#servTech h3').click(function(){
   var $servTech = $(this).next('#servTech div');
    if ($servTech.is(':hidden')) {
      $servTech.fadeIn(300);
      $(this).addClass('close');
    }else{
      $servTech.fadeOut(300);
      $(this).removeClass('close');
    }
  });

});//END READY