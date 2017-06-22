//Start JS code
$(document).ready(function(){
	$('#basic h1').hide();
	$('#basic h2').hide();
  $('.callBack div').hide();
  $('#visiting div').hide();
  $('#promo div').hide();
  $('#catalog div').hide();
  $('#landing div').hide();
  $('#company div').hide();
  $('#magazyn div').hide();
  $('#CMS div').hide();
  $('#browser div').hide();
  $('#seo-find div').hide();
  $('#servTech div').hide();
  $('#serv-info_2 div').hide();
  $('#designSite div').hide();
  $('#design-list-tuning').hide();
  //END all.hide()

	$('#basic').show(function(){
		$('#basic h1,#basic h2').fadeIn(2000);
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

  $('#contacts .tel').click(function(evt){
   	evt.preventDefault();
    $('.callBack .callPhone').slideDown(500);
  });
  $('.callBack img').click(function(evt){
  	evt.preventDefault;
    $('.callBack .callPhone').fadeOut(500);
  });
  $('#contacts .mail').click(function(evt){
    evt.preventDefault();
    $('.callBack .callMessange').slideDown(500);
  });
  $('.callBack img').click(function(evt){
    evt.preventDefault;
    $('.callBack .callMessange').slideUp(500);
  });//END callBack effect

  $('#visiting h2').click(function(){
    var $visiting = $(this).next('#visiting div');
    if ($visiting.is(':hidden')) {
      $visiting.slideDown(300);
      $(this).addClass('close');
    }else{
      $visiting.slideUp(300);
      $(this).removeClass('close');
    }
  });
  $('#landing h2').click(function(){
    var $landing = $(this).next('#landing div');
    if ($landing.is(':hidden')) {
      $landing.slideDown(300);
      $(this).addClass('close');
    }else{
      $landing.slideUp(300);
      $(this).removeClass('close');
    }
  });
  $('#company h2').click(function(){
    var $company = $(this).next('#company div');
    if ($company.is(':hidden')) {
      $company.slideDown(300);
      $(this).addClass('close');
    }else{
      $company.slideUp(300);
      $(this).removeClass('close');
    }
  });
  $('#magazyn h2').click(function(){
   var $magazyn = $(this).next('#magazyn div');
    if ($magazyn.is(':hidden')) {
      $magazyn.slideDown(300);
      $(this).addClass('close');
    }else{
      $magazyn.slideUp(300);
      $(this).removeClass('close');
    }
  });
  $('#CMS h3').click(function(){
    var $CMS = $(this).next('#CMS div');
    if ($CMS.is(':hidden')) {
      $CMS.slideDown(300);
      $(this).addClass('close');
    }else{
      $CMS.slideUp(300);
      $(this).removeClass('close');
    }
  });
  $('#browser h3').click(function(){
    var $browser = $(this).next('#browser div');
    if ($browser.is(':hidden')) {
      $browser.slideDown(300);
      $(this).addClass('close');
    }else{
      $browser.slideUp(300);
      $(this).removeClass('close');
    }
  });
  $('#seo-find h3').click(function(){
    var $seofind = $(this).next('#seo-find div');
    if ($seofind.is(':hidden')) {
      $seofind.slideDown(300);
      $(this).addClass('close');
    }else{
      $seofind.slideUp(300);
      $(this).removeClass('close');
    }
  });
  $('#servTech h3').click(function(){
   var $servTech = $(this).next('#servTech div');
    if ($servTech.is(':hidden')) {
      $servTech.slideDown(300);
      $(this).addClass('close');
    }else{
      $servTech.slideUp(300);
      $(this).removeClass('close');
    }
  });
  $('#serv-info_2 h2').click(function(){
   var $servinfo_2 = $(this).next('#serv-info_2 div');
    if ($servinfo_2.is(':hidden')) {
      $servinfo_2.slideDown(300);
      $(this).addClass('close');
    }else{
      $servinfo_2.slideUp(300);
      $(this).removeClass('close');
    }
  });
  $('#designSite h2').click(function(){
   var $designSite = $(this).next('#designSite div');
    if ($designSite.is(':hidden')) {
      $designSite.slideDown(300);
      $(this).addClass('close');
    }else{
      $designSite.slideUp(300);
      $(this).removeClass('close');
    }
  });
  $('#promo h2').click(function(){
   var $promo = $(this).next('#promo div');
    if ($promo.is(':hidden')) {
      $promo.slideDown(300);
      $(this).addClass('close');
    }else{
      $promo.slideUp(300);
      $(this).removeClass('close');
    }
  });
  $('#catalog h2').click(function(){
   var $catalog = $(this).next('#catalog div');
    if ($catalog.is(':hidden')) {
      $catalog.slideDown(300);
      $(this).addClass('close');
    }else{
      $catalog.slideUp(300);
      $(this).removeClass('close');
    }
  });//END Catalog site
  $('#design-block-tuning p.strelka').click(function(){
   var $designListTuning = $(this).next('#design-list-tuning');
    if ($designListTuning.is(':hidden')) {
      $designListTuning.slideDown(300);
    }else{
      $designListTuning.slideUp(300);
    }
  });//END DESIGN

});//END READY