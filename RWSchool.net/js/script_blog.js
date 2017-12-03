//*
$(document).ready(function () {
  $('#allContents_blog').hide();
  $('footer').hide();
  //END .hide()
  $('html').css({
    'background-color': 'white',
    'color': 'black'
  });
  /*/ALL_CONTENTS_BLOG
     HTML CODE/*/
  $('.introduction_blog').css({
    'width': 'auto',
    'max-width':'1200px',
    'margin-left': '0%'
  });
  //
  $('.blog_heading').html('<h1>Блог</h1>');
  //
  $('.last_blog').css({
    'background-image':'url(../images/work_9_min.png)',
    'height':'200px',
    'opacity':'.5'
  });
  //
  $('.l_blog_heading').html('<h2>BLOG_HEADING</h2>');
  //
  $('.m_blog_text').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, deserunt facere ullam, distinctio hic cum quibusdam quas magni labore velit, id ea! Aperiam aliquid, eos totam minima id tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, deserunt facere ullam, distinctio hic cum quibusdam quas magni labore velit, id ea! Aperiam aliquid, eos totam minima id tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, deserunt facere ullam, distinctio hic cum quibusdam quas magni labore velit, id ea! Aperiam aliquid, eos totam minima id tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, deserunt facere ullam, distinctio hic cum quibusdam quas magni labore velit, id ea! Aperiam aliquid, eos totam minima id tempore.</p>');
  $('.blog_submit').html('');
  $('footer').fadeIn();

  //CSS STYLE_BLOG
  //FIRST_BLOG
  $('.first_blog').css({
    'border': 'none',
    'border-radius': '3px',
    'margin-bottom': '20px',
    'padding': '20px'
  });
  $('.first_blog a').css({
    'text-decoration':'none',
    'color':'black',
    'outline':'none',
    'border':'none'
  });
  //
  $('#allContents_blog').fadeIn(1000);
  $('footer').fadeIn(6000);

});
