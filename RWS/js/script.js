$(document).ready(function(){
    // SLIDER
    $('.slider_2').hide();
    $('.slider_3').hide();
    $('.slider_1').show(function(){
        $('.sub1').addClass('slider_active');
    });
    // LIFE Slider function()
    //$(window).load(function() {
    //    $('.slider_1').css();
    //});
    // INPUT click()
    $('.sub2').click(function(){
        $('.slider_2').fadeIn(10);
        $('.slider_1').hide();
        $('.slider_3').hide();
        $('.sub2').addClass('slider_active');
        $('.sub1').removeClass('slider_active');
        $('.sub3').removeClass('slider_active');
    });
    $('.sub3').click(function(){
        $('.slider_3').fadeIn(10);
        $('.slider_1').hide();
        $('.slider_2').hide();
        $('.sub3').addClass('slider_active');
        $('.sub1').removeClass('slider_active');
        $('.sub2').removeClass('slider_active');
    });
    $('.sub1').click(function(){
        $('.slider_1').fadeIn(10);
        $('.slider_3').hide();
        $('.slider_2').hide();
        $('.sub1').addClass('slider_active');
        $('.sub2').removeClass('slider_active');
        $('.sub3').removeClass('slider_active');
    });
});