$(document).ready(function () {
  $('.newUser').hide();
  $('.singIn_open').hide();
  $('.all_contents').hide();
  $('footer').hide();
  //END .hide()
  //LOAD WELCOME_TO_SITE
  $('#welcome_to_site').animate({
    'top': '10%'
  }, 1200);
  $('.wlcm_submit input').click(function () {
    $('#welcome_to_site')//.animate({
   /* 'top': '-=100%'
    }, 1200);/*/.fadeOut(600);
    $('html').animate({
      'background-color': 'white',
      'color': 'black'
    }, 1500);
    $('.all_contents').fadeIn(1000);
    $('footer').fadeIn();
    //BLOCK_BLOG

  }); //END WELCOME_TO_SITE
  //REGISTRATION FORM NEW_USERS
  $('#registration').click(function () {
    $('.newUser').fadeIn(600).css({
      'position': 'absolute',
      'top': '0',
      'left': '30%',
      'right': '20%',
      'padding': '20px',
      'border-radius': '0 0 5px 5px',
      'box-shadow': '0 0 5px gray',
      'color': 'black',
      'text-align': 'left',
      'background-color': 'white'
    });
    $('.newUser_heading').html('<h1>Форма регистрации</h1>').css('text-align', 'center');
    $('html').css({
      'background-color': 'rgba(215,215,215,.9)',
      'color': 'gray'
    });
    //***
    $('.basic_newUser').html('<p style="font-size: .9em;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quis neque, doloribus officia distinctio placeat. Ullam reiciendis nam, expedita reprehenderit quam in rerum veniam. Ratione autem reiciendis reprehenderit esse facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quis neque, doloribus officia distinctio placeat. Ullam reiciendis nam, expedita reprehenderit quam in rerum veniam. Ratione autem reiciendis reprehenderit esse facere.</p>');
    //***
    $('.newUser_regForm').html('<div><p>Имя: <input name="first_name" type="first_name" title="Имя" placeholder="Имя"/></p><p>Фамилия: <input name="last_name" type="last_name" title="Фамилия" placeholder="Фамилия"/></p><p>Отчество: <input name="middle_name" type="middle_name" title="Отчество" placeholder="Отчество"/></p><p>Дата рождения: <input name="birthday" type="date" title="Дата рождения"/></p><p>E-mail: <input name="email" type="email" title="E-mail" placeholder="E-mail"/></p><p align="center" style="padding:20px 0 0 0; font-size: .9em;">Придумайте пароль для входа (мин.6 знаков)</p><p>Пароль: <input type="password" name="password" title="Придумайте пароль" placeholder="Пароль"/></p><p>Повторите: <input type="password" name="return_password" title="Повторите пароль" placeholder="Повторите пароль"/></p></div>');
    $('.newUser_regForm div').css({
      'width': '350px',
      'margin': '0 auto'
    });
    $('.newUser_regForm input').css({
      'border': '1px solid lightgray',
      'height': '30px',
      'padding-left': '5px',
      'float': 'right'
    });
    //***
    $('.newUser_submit').html('<p class="check"><input type="checkbox" checked/>Нажимая кнопку "Отправить" я подтвеждаю то, что ознакомлен(а) с условия о предоставлении <a href="../doc/">Персональных данных и их обработки</a></p><p><input type="button" value="X" class="submit_exit"/></p><p><input type="button" value="Отправить" class="reg_submit"/></p>');
    $('.newUser_submit input').css({
      'height': '30px',
      'padding-left': '5px'
    });
    $('.check').css('font-size', '.7em');
    $('.check input').css({
      'float': 'left'
    });
    //$('.reg_submit').css({'border-radius': '10px','box-shadow':'0 0 1px grey','font-size': '.9em','padding': '5px 10px','background-color': 'ghostwhite','float': 'right','cursor': 'pointer'});
    $('.submit_exit').click(function () {
      $('.newUser').fadeOut(600);
      $('html').css({
        'background-color': 'white',
        'color': 'black'
      });
    });
  });
  //END REGISTRATION FORM NEW_USERS
  //SING_IN FORM
  $('#singIn').click(function () {
    $('.singIn_open').fadeIn().css({
      'position': 'absolute',
      'top': '0',
      'left': 'auto',
      'right': '0',
      'padding': '20px',
      'width': '300px',
      'border': 'none',
      'border-radius': '0 0 5px 20px',
      'box-shadow': '0 0 5px gray',
      'color': 'black',
      'background-color': 'white'
    }).animate({
      'left': '-=45%'
    }, 500);
    $('html').css({
      'background-color': 'rgba(215,215,215,.9)',
      'color': 'gray'
    });
    $('.singIn_heading').html('<h2>Войти в систему</h2>').css({
      'text-align': 'center'
    });
    $('.singIn_basic').html('<div class=""><p><input name="email" type="text" title="E-mail" placeholder="E-mail"/></p><p><input name="password" type="password" title="Пароль" placeholder="Пароль"/></p></div>');
    $('.singIn_basic div').css({
      'margin': '0 auto',
      'width': '200px'
    });
    $('.singIn_basic input').css({
      'width': '200px',
      'height': '23px',
      'border': '1px solid lightgray',
      'padding-left': '0',
      'text-align': 'center'
    });
    $('.singIn_social div').css('margin', '0 auto');
    $('.singIn_submit').html('<div class="exit"><input type="button" value=" X "/></div><div class="open"><input type="button" value="Войти"/></div>');
    $('.exit input').click(function () {
      var $i = 200
      $('.singIn_open').animate({
        'left': '+=45%'
      }, $i).fadeOut();
      $('html').css({
        'background-color': 'white',
        'color': 'black'
      });
    });
    //$('.open input').css({'float': 'right','padding': '5px 10px','border': '1px solid lightgray','border-radius': '10px','background-color': 'ghostwhite','cursor': 'pointer'});
  }); //END SING_IN FORM

}); //END .ready()
