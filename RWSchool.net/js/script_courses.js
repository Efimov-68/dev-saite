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
  
  //ALL_CONTENTS_COURSES
  $('.heading_courses').html('<h1>Выберите свой курс</h1>');
  
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
  
});