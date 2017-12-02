$(document).ready(function(){
  $('.all_contents_courses').hide();
  $('footer').hide();
  //end hide()
  $('html').css({
      'background-color':'white',
      'color':'black'
  });
  $('.all_contents_courses').fadeIn(1000);
  $('footer').fadeIn(1000);
  //
  //$('#registration').click(function(){
  //  $('.all_contents_courses').fadeOut(1000);
  //  $('footer').fadeOut(600);
  //});
  //$('.submit_exit').click(function(){
  //  $('.all_contents_courses div').show();
  //});
  //$('#singIn').click(function(){
  //  $('.all_contents_courses').hide();
  //  $('footer').hide();
  //});
  //ALL_CONTENTS_COURSES
  $('.heading_courses').html('<h1>Выберите свой курс</h1>').css('text-align','center');
  //CHILDS_COURSES
  $('#Courses_for_Childs').css({
    'margin':'0 auto 600px auto'
  });
  $('.heading_Childs').html('<h2>Курсы для детей.</h2>').css({
    'padding':'20px'
  });
  //HEADING
  $('.heading_Chlds_html').html('<h3>HTML для детей</h3>').css({
    'text-align':'center'
  });
  $('.heading_Chlds_css').html('<h3>CSS для детей</h3>').css({
    'text-align':'center'
  });
  $('.heading_Chlds_js').html('<h3>JavaScript для детей</h3>').css({
    'text-align':'center'
  });
  $('.heading_Chlds_python').html('<h3>Python для детей</h3>').css({
    'text-align':'center'
  });
  //TEXT
  $('.text_Childs_html').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, fugit. Accusantium sed dolores sequi placeat dignissimos aspernatur eius, ex labore, earum id obcaecati, nam nemo doloremque vel assumenda, molestiae. Modi.</p>');
  $('.text_Childs_css').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, fugit. Accusantium sed dolores sequi placeat dignissimos aspernatur eius, ex labore, earum id obcaecati, nam nemo doloremque vel assumenda, molestiae. Modi.</p>');
  $('.text_Childs_js').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, fugit. Accusantium sed dolores sequi placeat dignissimos aspernatur eius, ex labore, earum id obcaecati, nam nemo doloremque vel assumenda, molestiae. Modi.</p>');
  $('.text_Childs_python').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, fugit. Accusantium sed dolores sequi placeat dignissimos aspernatur eius, ex labore, earum id obcaecati, nam nemo doloremque vel assumenda, molestiae. Modi.</p>');
  //TEENAGERS_COURSES
  $('#Courses_for_Teenagers').css({
    'margin':'0 auto 800px auto'
  });
  $('.heading_Teenagers').html('<h2>Курсы для подростков.</h2>').css({
    'padding':'20px'
  });
  //HEADING
  $('.heading_Tngrs_html').html('<h3>HTML для подростков</h3>').css({
    'text-align':'center'
  });
  $('.heading_Tngrs_css').html('<h3>CSS для подростков</h3>').css({
    'text-align':'center'
  });
  $('.heading_Tngrs_js').html('<h3>JavaScript для подростков</h3>').css({
    'text-align':'center'
  });
  $('.heading_Tngrs_python').html('<h3>Python для подростков</h3>').css({
    'text-align':'center'
  });
  $('.heading_Tngrs_django').html('<h3>Django для подростков</h3>').css({
    'text-align':'center'
  });
  //TEXT
  $('.text_Teenagers_html').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, fugit. Accusantium sed dolores sequi placeat dignissimos aspernatur eius, ex labore, earum id obcaecati, nam nemo doloremque vel assumenda, molestiae. Modi.</p>');
  $('.text_Teenagers_css').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, fugit. Accusantium sed dolores sequi placeat dignissimos aspernatur eius, ex labore, earum id obcaecati, nam nemo doloremque vel assumenda, molestiae. Modi.</p>');
  $('.text_Teenagers_js').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, fugit. Accusantium sed dolores sequi placeat dignissimos aspernatur eius, ex labore, earum id obcaecati, nam nemo doloremque vel assumenda, molestiae. Modi.</p>');
  $('.text_Teenagers_python').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, fugit. Accusantium sed dolores sequi placeat dignissimos aspernatur eius, ex labore, earum id obcaecati, nam nemo doloremque vel assumenda, molestiae. Modi.</p>');
  $('.text_Teenagers_django').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, fugit. Accusantium sed dolores sequi placeat dignissimos aspernatur eius, ex labore, earum id obcaecati, nam nemo doloremque vel assumenda, molestiae. Modi.</p>');
  //ADULTS_COURSES
  $('#Courses_for_Adults').css({
    'margin':'0 auto 800px auto'
  });
  $('.heading_Adults').html('<h2>Курсы для взрослых.</h2>').css({
    'padding':'20px'
  });
  //HEADING
  $('.heading_Adults_html').html('<h3>HTML продвинутый курс</h3>');
  $('.heading_Adults_css').html('<h3>CSS продвинутый курс</h3>');
  $('.heading_Adults_js').html('<h3>JavaScript продвинутый курс</h3>');
  $('.heading_Adults_python').html('<h3>Python продвинутый курс</h3>');
  $('.heading_Adults_django').html('<h3>Django продвинутый курс</h3>');
  //TEXT
  $('.text_Adults_html').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, fugit. Accusantium sed dolores sequi placeat dignissimos aspernatur eius, ex labore, earum id obcaecati, nam nemo doloremque vel assumenda, molestiae. Modi.</p>');
  $('.text_Adults_css').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, fugit. Accusantium sed dolores sequi placeat dignissimos aspernatur eius, ex labore, earum id obcaecati, nam nemo doloremque vel assumenda, molestiae. Modi.</p>');
  $('.text_Adults_js').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, fugit. Accusantium sed dolores sequi placeat dignissimos aspernatur eius, ex labore, earum id obcaecati, nam nemo doloremque vel assumenda, molestiae. Modi.</p>');
  $('.text_Adults_python').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, fugit. Accusantium sed dolores sequi placeat dignissimos aspernatur eius, ex labore, earum id obcaecati, nam nemo doloremque vel assumenda, molestiae. Modi.</p>');
  $('.text_Adults_django').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, fugit. Accusantium sed dolores sequi placeat dignissimos aspernatur eius, ex labore, earum id obcaecati, nam nemo doloremque vel assumenda, molestiae. Modi.</p>');
});