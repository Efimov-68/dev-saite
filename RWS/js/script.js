$(document).ready(function(){
    $('.slider_2').hide();
    $('.slider_3').hide();
    
    // end HIDE()
    $(document).show(function(){
        var $s1 = $('slder_1')
        var $s2 = $('slider_2')
        var $s3 = $('slider_3')
        $s1.fideIn(300);
    });
});