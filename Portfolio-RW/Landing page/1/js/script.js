$(document).ready(function(){
	//Переменные
	var $visitingSite = $('#visiting-site');
	var $companySite = $('#company-site');
	var $landingPage = $('#landing-page');
	var $magazineSite = $('#internet-magazine')
	var $homeInfoDevelopers = $('#home-info-developers');
	var $visitingSiteInfo = $('#header_developers_visiting');
	var $companySiteInfo = $('#header_developers_company');
	var $landingPageInfo = $('#header_developers_landing');
	var $magazineSiteInfo = $('#header_developers_magazine');
	//var end Developer
	var $homeInfoDesign = $('#home-info-design');
	var $standardDesign = $('#standard-design');
	var $individualDesign = $('#individual-design');
	var $headerDesignStandart = $('#header_design_standart');
	var $headerDesignIndividual = $('#header_design_individual');
	//var end Design

	// {end var} конец Переменных
	//Developer site
	$visitingSiteInfo.hide();
	$companySiteInfo.hide();
	$landingPageInfo.hide();
	$magazineSiteInfo.hide();
	//Design site
	$headerDesignStandart.hide();
	$headerDesignIndividual.hide();
	//end hide()
	// Создание сайта
	$visitingSite.mouseover(function(){
		if ($visitingSiteInfo.is(':hidden')) {
			$visitingSiteInfo.fadeIn(300);
			$homeInfoDevelopers.fadeOut();
			$companySiteInfo.hide();
			$magazineSiteInfo.hide();
			$landingPageInfo.hide();
		}else{
			$visitingSiteInfo.fadeOut();
			$homeInfoDevelopers.fadeIn(300);
		}
	});//end VISITING
	$companySite.mouseover(function(){
		if ($companySiteInfo.is(':hidden')) {
			$companySiteInfo.fadeIn(300);
			$homeInfoDevelopers.fadeOut();
			$visitingSiteInfo.hide();
			$landingPageInfo.hide();
			$magazineSiteInfo.hide();
		}else{
			$companySiteInfo.fadeOut();
			$homeInfoDevelopers.fadeIn(300);
		}
	});//end COMPANY
	$landingPage.mouseover(function(){
		if ($landingPageInfo.is(':hidden')) {
			$landingPageInfo.fadeIn(300);
			$homeInfoDevelopers.fadeOut();
			$visitingSiteInfo.hide();
			$companySiteInfo.hide();
			$magazineSiteInfo.hide();
		}else{
			$landingPageInfo.fadeOut();
			$homeInfoDevelopers.fadeIn(300);
		}
	});//end LANDING
	$magazineSite.mouseover(function(){
		if ($magazineSiteInfo.is(':hidden')) {
			$magazineSiteInfo.fadeIn(300);
			$homeInfoDevelopers.fadeOut();
			$visitingSiteInfo.hide();
			$companySiteInfo.hide();
			$landingPageInfo.hide();
		}else{
			$magazineSiteInfo.fadeOut();
			$homeInfoDevelopers.fadeIn(300);
		}
	});//end MAGAZINE
	// конец Создания сайта
	// Дизайн сайта
	$standardDesign.mouseover(function(){
		if ($headerDesignStandart.is(':hidden')) {
			$headerDesignStandart.fadeIn(300);
			$homeInfoDesign.fadeOut();
			$headerDesignIndividual.hide();
		}else{
			$headerDesignStandart.fadeOut();
			$homeInfoDesign.fadeIn(300);
		}
	});// end STANDARD SITE
	$individualDesign.mouseover(function(){
		if ($headerDesignIndividual.is(':hidden')) {
			$headerDesignIndividual.fadeIn(300);
			$homeInfoDesign.fadeOut();
			$headerDesignStandart.hide();
		}else{
			$headerDesignIndividual.fadeOut();
			$homeInfoDesign.fadeIn(300);
		}
	});//end INDIVIDUAL SITE
	// конец Дизайна сайта
});// end ready