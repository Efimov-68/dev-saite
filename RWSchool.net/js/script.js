$(document).ready(function(){
    $('#registration').click(function(){
        $('.newUser_h').html('<h1>Форма регистрации</h1>');
        $('.newUser').css({
            'position': 'absolute',
            'top': '10%',
            'left': '30%',
            'right': '20%',
            'padding':'20px',
            'border-radius': '20px',
            'box-shadow': '0 0 10px black',
            'color': 'black',
            'text-align': 'center',
            'background-color': 'whitesmoke'
        });
        $('html').css({'background-color': 'rgba(215,215,215,.9)', 'color': 'gray'});
        $('.basic_newUser').html('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quis neque, doloribus officia distinctio placeat. Ullam reiciendis nam, expedita reprehenderit quam in rerum veniam. Ratione autem reiciendis reprehenderit esse facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quis neque, doloribus officia distinctio placeat. Ullam reiciendis nam, expedita reprehenderit quam in rerum veniam. Ratione autem reiciendis reprehenderit esse facere.</p>');
        $('.newUser_regForm').html('<p>Имя: <input name="first_name" type="first_name" title="Имя"/></p><p>Фамилия: <input name="last_name" type="last_name" title="Фамилия"/></p><p>Отчество: <input name="middle_name" type="middle_name" title="Отчество"/></p><p>Дата рождения: <input name="birthday" type="date" title="Дата рождения"/></p><p>E-mail: <input name="email" type="email" title="E-mail"/></p><p><input type="checkbox" class="check" checked/>Нажимая кнопку "Отправить" я подтвеждаю то, что ознакомлен(а) с условия о предоставлении <a href="../doc/">Персональных данных и их обработки</a></p><p><input type="button" value="Отправить" class="reg_submit"/></p><p><input type="button" value="Отправить" class="reg_submit"/></p>');
        $('.newUser_regForm input').css({
            'border': '1px solid lightgray',
            'font-size': '1.4em'
        });
        $('.check').css({
            'float': 'left'
        });
        $('.reg_submit').css({
            'border-radius': '10px',
            'font-size': '.9em',
            'padding': '5px 10px',
            'float': 'right'
        });
        $('').
    });
});