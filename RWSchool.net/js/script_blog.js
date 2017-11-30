//*
$(document).ready(function(){
  $('#allContents_blog').hide();
  $('footer').hide();
//END .hide()
  $('html').css({'background-color':'white','color':'black'});
//ALL_CONTENTS_BLOG
  //HTML CODE
  $('.introduction_blog').css({
    'width':'1000px',
    'margin-left':'5%'
  });
  //
  $('.blog_heading').html('<h1>Блог</h1>');
  //
  $('.first_blog').html();
  //
  $('.last_blog').html();
  //
  $('.l_blog_heading').html('<h2>BLOG_HEADING</h2>');
  //
  $('.middle_blog').html();
  //
  $('.m_blog_text').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, deserunt facere ullam, distinctio hic cum quibusdam quas magni labore velit, id ea! Aperiam aliquid, eos totam minima id tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, deserunt facere ullam, distinctio hic cum quibusdam quas magni labore velit, id ea! Aperiam aliquid, eos totam minima id tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, deserunt facere ullam, distinctio hic cum quibusdam quas magni labore velit, id ea! Aperiam aliquid, eos totam minima id tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, deserunt facere ullam, distinctio hic cum quibusdam quas magni labore velit, id ea! Aperiam aliquid, eos totam minima id tempore.</p>');
  $('.blog_submit').html('<a href="">Читать статью</a>');
  $('footer').fadeIn();
  
  //CSS STYLE_BLOG
  //FIRST_BLOG
  $('.first_blog').css({'border': 'none','border-radius':'10px','margin-bottom':'20px','padding':'20px','box-shadow':'0 0 10px black'});
  //
  $('#allContents_blog').fadeIn(3000);
  $('footer').fadeIn(6000);
  
});