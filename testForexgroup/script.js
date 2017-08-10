$(document).ready(function(){
	//$('#data-size td input').hide();
	//end hide()
	/*$('#data-size td').click(function(){
    	var $dataSize = $(this).show('#data-size td input');
    	if ($dataSize.is(':hidden')) {
    		$dataSize.slideDown(300);
    		$(this).addClass('close');
    	}else{
    		$dataSize.slideUp(300);
    		$(this).removeClass('close');
    	}
	});*/

	$('#confirm').dialog({
    modal: true,
  	autoOpen: false,
    buttons : {
      "Подтвердить" : function() {
        $('#data-size input["checked"]', true).effect('explode');
        $(this).dialog('close');
      },
      "Отменить" : function() {
        $(this).dialog('close');
      }
    } // end buttons
  });
  $('#delete input[type="submit"]').click(function() {
  	$('#confirm').dialog('open');
  }); // end click

  $('#allcontents input[name="allcontents"]').click(function(){
  	if () {
  		$("input[type=checkbox]").prop('checked', true);
  		$(this).addClass('.checkInput')
  	}else{
  		$("input[type=checkbox]").prop(false);
  	}
  });
});//end ready