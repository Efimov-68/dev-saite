//LOAD WELCOME
$(document).ready(function(){
    $('.welcome_to_site').hide();
    $('.wlcm_submit input').click(function(){
        $('#welcome_to_site').fadeOut(400);
        $('html').css({
            'background-color': 'white',
            'color': 'black'
        });
    });
});
//REGISTRATION FORM
$(document).ready(function(){
    $('.newUser').hide();
    $('#registration').click(function(){
        $('.newUser').fadeIn(600);
        $('.newUser_h').html('<h1>Форма регистрации</h1>');
        $('.newUser').css({
            'position': 'absolute',
            'top': '10%',
            'left': '30%',
            'right': '20%',
            'padding':'20px',
            'border-radius': '5px',
            //'box-shadow': '0 0 10px black',
            'color': 'black',
            'text-align': 'left',
            'background-color': 'whitesmoke'
        });
        $('.newUser_h').css('text-align', 'center');
        $('html').css({'background-color': 'rgba(215,215,215,.9)', 'color': 'gray'});
        //***
        $('.basic_newUser').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quis neque, doloribus officia distinctio placeat. Ullam reiciendis nam, expedita reprehenderit quam in rerum veniam. Ratione autem reiciendis reprehenderit esse facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quis neque, doloribus officia distinctio placeat. Ullam reiciendis nam, expedita reprehenderit quam in rerum veniam. Ratione autem reiciendis reprehenderit esse facere.</p>');
        //***
        $('.newUser_regForm').html('<div><p>Имя: <input name="first_name" type="first_name" title="Имя"/></p><p>Фамилия: <input name="last_name" type="last_name" title="Фамилия"/></p><p>Отчество: <input name="middle_name" type="middle_name" title="Отчество"/></p><p>Дата рождения: <input name="birthday" type="date" title="Дата рождения"/></p><p>E-mail: <input name="email" type="email" title="E-mail"/></p></div><p class="check"><input type="checkbox" checked/>Нажимая кнопку "Отправить" я подтвеждаю то, что ознакомлен(а) с условия о предоставлении <a href="../doc/">Персональных данных и их обработки</a></p><p><input type="button" value="Отмена" class="submit_exit"/></p><p><input type="button" value="Отправить" class="reg_submit"/></p>');
        //
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
        $('.check').css('font-size', '.7em');
        $('.check input').css({
            'float': 'left'
        });
        $('.reg_submit').css({
            'border-radius': '10px 0',
            'font-size': '.9em',
            'padding': '5px 10px',
            'background-color': 'ghostwhite',
            'float': 'right'
        });
        $('.submit_exit').css({
            'border-radius': '0 10px',
            'font-size': '.9em',
            'padding': '5px 10px',
            'background-color': 'ghostwhite',
            'float': 'left'
        });
        //***
        $('.submit_exit').click(function(){
            $('.newUser').fadeOut(600);
            $('html').css({'background-color': 'white', 'color': 'black'});
        });
    });
});