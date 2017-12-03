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
    'margin':'0 auto 50px auto'
  });
  //HEADING
  $('.heading_Tngrs_js').html('<h3>JavaScript для подростков</h3>').css({
    'text-align':'center'
  });
  $('.heading_Tngrs_python').html('<h3>Python для подростков</h3>').css({
    'text-align':'center'
  });
  //TEXT
  $('.text_Teenagers_js').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, fugit. Accusantium sed dolores sequi placeat dignissimos aspernatur eius, ex labore, earum id obcaecati, nam nemo doloremque vel assumenda, molestiae. Modi.</p>');
  $('.text_Teenagers_python').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, fugit. Accusantium sed dolores sequi placeat dignissimos aspernatur eius, ex labore, earum id obcaecati, nam nemo doloremque vel assumenda, molestiae. Modi.</p>');
  
});