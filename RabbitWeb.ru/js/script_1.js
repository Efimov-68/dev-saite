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
  //$('#CMS div').hide();
  $('#seo-find div').hide();
  $('#servTech div').hide();
  $('#serv-info_2 div').hide();
  $('#designSite .blockLeft').hide();
  $('#design-upgrade-small div').hide();
  $('#logoSiteInfo div').hide();
  $('#design-list-upgrade').hide();
  $('.package div').hide();
  $('#siteDevelopers').hide();

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

  $('#visiting h3').click(function(){
    var $visiting = $(this).next('#visiting div');
    if ($visiting.is(':hidden')) {
      $visiting.slideDown(300);
      $(this).addClass('close');
    }else{
      $visiting.slideUp(300);
      $(this).removeClass('close');
    }
  });
  //Additionally
    $('#visiting div a.sbmtAdditionally').click(function(){
      var $additionally = $(this).next('#visiting div div.additionally');
      if ($additionally.is(':hidden')) {
        $additionally.slideDown(300);
      }else{
        $additionally.slideUp(300);
      }
    });
  //END additionally

  $('#landing h3').click(function(){
    var $landing = $(this).next('#landing div');
    if ($landing.is(':hidden')) {
      $landing.slideDown(300);
      $(this).addClass('close');
    }else{
      $landing.slideUp(300);
      $(this).removeClass('close');
    }
  });
  //Additionally
    $('#landing div a.sbmtAdditionally').click(function(){
      var $additionally = $(this).next('#landing div div.additionally');
      if ($additionally.is(':hidden')) {
        $additionally.slideDown(300);
      }else{
        $additionally.slideUp(300);
      }
    });
  //END additionally

  $('#company h3').click(function(){
    var $company = $(this).next('#company div');
    if ($company.is(':hidden')) {
      $company.slideDown(300);
      $(this).addClass('close');
    }else{
      $company.slideUp(300);
      $(this).removeClass('close');
    }
  });
  //Additionally
    $('#company div a.sbmtAdditionally').click(function(){
      var $additionally = $(this).next('#company div div.additionally');
      if ($additionally.is(':hidden')) {
        $additionally.slideDown(300);
      }else{
        $additionally.slideUp(300);
      }
    });
  //END additionally

  $('#magazyn h3').click(function(){
    var $magazyn = $(this).next('#magazyn div');
    if ($magazyn.is(':hidden')) {
      $magazyn.slideDown(300);
      $(this).addClass('close');
    }else{
      $magazyn.slideUp(300);
      $(this).removeClass('close');
    }
  });
  //Additionally
    $('#magazyn div a.sbmtAdditionally').click(function(){
      var $additionally = $(this).next('#magazyn div div.additionally');
      if ($additionally.is(':hidden')) {
        $additionally.slideDown(300);
      }else{
        $additionally.slideUp(300);
      }
    });
  //END additionally

  /*$('#CMS h3').click(function(){
    var $CMS = $(this).next('#CMS div');
    if ($CMS.is(':hidden')) {
      $CMS.slideDown(300);
      $(this).addClass('close');
    }else{
      $CMS.slideUp(300);
      $(this).removeClass('close');
    }
  });*/
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
  $('#designSite h3').click(function(){
   var $designSite = $(this).next('#designSite .blockLeft');
    if ($designSite.is(':hidden')) {
      $designSite.slideDown(300);
      $(this).addClass('close');
    }else{
      $designSite.slideUp(300);
      $(this).removeClass('close');
    }
  });  
  $('#design-upgrade-small h2').click(function(){
    var $designUpgradeSmall = $(this).next('#design-upgrade-small div');
    if ($designUpgradeSmall.is(':hidden')) {
      $designUpgradeSmall.slideDown(300);
      $(this).addClass('close');
    }else{
      $designUpgradeSmall.slideUp(300);
      $(this).removeClass('close');
    }
  });
  $('#logoSiteInfo h3').click(function(){
   var $logoSiteInfo = $(this).next('#logoSiteInfo div');
    if ($logoSiteInfo.is(':hidden')) {
      $logoSiteInfo.slideDown(300);
      $(this).addClass('close');
    }else{
      $logoSiteInfo.slideUp(300);
      $(this).removeClass('close');
    }
  });//END Catalog site
  $('#design-block-upgrade p.strelka').click(function(){
   var $designListUpgrade = $(this).next('#design-list-upgrade');
    if ($designListUpgrade.is(':hidden')) {
      $designListUpgrade.slideDown(300);
    }else{
      $designListUpgrade.slideUp(300);
    }
  });//END DESIGN TUNING

  //SEO Package
  $('.package a').click(function(){
   var $package = $(this).next('.package div');
    if ($package.is(':hidden')) {
      $package.slideDown(300);
    }else{
      $package.slideUp(300);
    }
  });//END SEO Package
  //*Menu 480px viewport*
  $('#menuIcon').click(function(){
      var $menuParagraph = $(this).next('#menuParagraph');
      if ($menuParagraph.is(':hidden')) {
        $menuParagraph.slideDown(300);
      }else{
        $menuParagraph.slideUp(300);
      }
  });
  $('#developers a').click(function(){
      var $siteDevelopers = $(this).next('#siteDevelopers');
      if ($siteDevelopers.is(':hidden')) {
        $siteDevelopers.slideDown(300);
      }else{
        $siteDevelopers.slideUp(300);
      }
  });//*end* Menu 480px viewport//*end* Menu 480px viewport

});//END READY

//***window CallBack
$(document).ready(function() {
  // open external links in new window
  $('a[href^="http://"]').attr('target','_blank');
  
  //position resources panel on screen
  $('#resources').show().delay(500).animate({ left : '-25em' }, 250).animate({left:'-29em'},250);
  
  // resources panel
  var panel=false;
  $('.open').click(function() {
    if (!panel) {
      $(this).text('x');
      $('#resources').animate({
        left : 0
      }, 250); // end animate
      panel=true;
    } else {
      $(this).text('o');
      $('#resources').animate({
        left : '-29em'
      }, 250); // end animate
      panel=false;
    }
  });
}); // end ready
//end window CallBack