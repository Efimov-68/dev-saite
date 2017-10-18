$(document).ready(function(){
    $('.slider_2').hide();
    $('.slider_3').hide();
    
    // end HIDE()
    $(document).scrollDown(function(){
        $blockListInfo = $('.block_list_info li');
        if($blockListInfo.is(':hidden')){
        	$blockListInfo.fadeIn(1500);
        }
    });
});