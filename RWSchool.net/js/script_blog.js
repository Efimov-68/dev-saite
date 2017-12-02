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
    'max-width':'1000px',
    'margin-left': '5%'
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
  $('.blog_submit').html('');
  $('footer').fadeIn();

  //CSS STYLE_BLOG
  //FIRST_BLOG
  $('.first_blog').css({
    'border': '.5px solid lightgray',
    'border-radius': '3px',
    'margin-bottom': '20px',
    'padding': '20px',
    //'box-shadow':'0 0 3px gray'
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
