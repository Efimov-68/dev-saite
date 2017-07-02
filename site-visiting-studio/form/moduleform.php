<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta content='text/html; charset=UTF-8' http-equiv='Content-Type'>
		<meta http-equiv="refresh" content="1; url=http://rabbitweb.ru">
		<link rel="stylesheet" type="text/css" href="../css/1300x2539_stylePage.css" media="screen and (min-device-width: 240px)">
		<title>Отправка формы запроса</title>
	</head>
	<body>
		<?php
			$name = $_GET['fio'];$phone = $_GET['number'];$services_1 = $_GET['order1'];$services_2 = $_GET['order2'];$services_3 = $_GET['order3'];$services_4 = $_GET['order4'];$services_5 = $_GET['order5'];$services_6 = $_GET['order6'];$services_7 = $_GET['order7'];$services_8 = $_GET['order8'];$services_9 = $_GET['order9'];$services_10 = $_GET['order10'];$services_11 = $_GET['order11'];$services_12 = $_GET['order12'];$services_13 = $_GET['order13'];$services_14 = $_GET['order14'];$services_15 = $_GET['order15'];$services_16 = $_GET['order16'];$services_17 = $_GET['order17'];$services_18 = $_GET['order18'];$services_19 = $_GET['order19'];$services_20 = $_GET['order20'];$services_21 = $_GET['order21'];$services_22 = $_GET['order22'];$services_23 = $_GET['order23'];$services_24 = $_GET['order24'];$services_25 = $_GET['order25'];$services_26 = $_GET['order26'];$services_27 = $_GET['order27'];$services_28 = $_GET['order28'];$services_29 = $_GET['order29'];$services_30 = $_GET['order30'];$services_31 = $_GET['order31'];$services_32 = $_GET['order32'];$services_33 = $_GET['order33'];$services_34 = $_GET['order34'];$services_35 = $_GET['order35'];

			$to = 'office@rabbitweb.ru';
			$subject = 'Сообщение с сайта';
			$msg = "<p>Ф.И.О.: $name\n".
				"Телефон: $phone\n".
				"Выпадающее многоуровневое меню (1200руб.): $services_1\n".
				"Модуль 'Статей' (1200руб.): $services_2\n".
				"Динамическое слайдшоу с эффектами анимации (4500руб.): $services_3\n".
				"Модуль 'Опрос' (1200руб.): $services_4\n".
				"Настройка e-mail рассылки (2900руб.): $services_5\n".
				"Поиск по сайту (3500руб.): $services_6\n".
				"Личный кабинте и закрытые разделы (4500руб.): $services_7\n".
				"Интеграция с социальными сетьми (1500руб.): $services_8\n".
				"Наполнение основного раздела сайта информацией клиента (2500рруб.): $services_9\n".
				"Форма обратной связи (900руб.): $services_10\n".
				"Модуль 'Фотогалерея' 3500руб.): $services_11\n".
				"Настройка рекламной кампании (5000руб.): $services_12\n".
				"Регистрация сайта в поисковых системах (1800руб.): $services_13\n".
				"Модуль 'Каталог' (12500руб.): $services_14\n".
				"Установка на сайт виджет 'Онлайн чат'' (2200руб.): $services_15\n".
				"Модуль 'YouTube' (3500руб.): $services_16\n".
				"Интеграция с Яндекс.Маркет (5500руб.): $services_17\n".
				"Отрисовка дополнительного макета дизайна (3000руб.): $services_18\n".
				"Верстка дополнительного макета дизайна (2500руб.): $services_19\n".
				"Адаптивная верстка (8000руб.): $services_20\n".
				"Настройка фильтра поиска по каталогу (1900руб.): $services_21\n".
				"Настройка скриптов и анимации (4000руб.): $services_22\n".
				"Консультационная поддержка (1500руб): $services_23\n".
				"Выгрузка на 1С (12000руб.): $services_24\n".
				"Поиск Автонабором по сайту (8500руб.): $services_25\n".
				"Установка системы автооплаты (4500руб.): $services_26\n".
				"Мобильная версия (20000руб.): $services_27\n".
				": $services_28\n".
				"Создание групп в социальной сети (4500руб.): $services_29\n".
				"Google Analytics (3500руб.): $services_30\n".
				"Google AdWords (5000руб.): $services_31\n".
				"Разработка текстов для сайта (от 300 руб.): $services_32\n".
				"Разработка рекламных текстов (от 500 руб.): $services_33\n".
				"Разработка названий, нейминг (от 3000 руб.): $services_34\n".
				"Разработка слоганов (от 3000 руб.): $services_35</p>";

			mail($to, $subject, $msg, 'From: ' . $email);
		?>
	</body>
</html>